#!/usr/bin/env bash
set -Eeuo pipefail

ROOT="$(pwd)"
OUT_DIR="$ROOT/_snapshot"
OUT_FILE="$OUT_DIR/repo_snapshot_$(date +%Y%m%d_%H%M%S).txt"

mkdir -p "$OUT_DIR"

exec > >(tee "$OUT_FILE") 2>&1

echo "=================================================="
echo "CEA PROJECT SNAPSHOT"
echo "=================================================="
echo "Generated: $(date)"
echo "Root: $ROOT"
echo

echo "=================================================="
echo "1. BASIC INFO"
echo "=================================================="
echo "User: $(whoami)"
echo "Hostname: $(hostname)"
echo "PWD: $(pwd)"
echo

echo "=================================================="
echo "2. TOP-LEVEL FILES"
echo "=================================================="
find . -maxdepth 1 -mindepth 1 \
  ! -name ".git" \
  ! -name "node_modules" \
  ! -name ".next" \
  ! -name ".vercel" \
  ! -name ".turbo" \
  | sort
echo

echo "=================================================="
echo "3. REPOSITORY TREE (depth 5)"
echo "=================================================="
if command -v tree >/dev/null 2>&1; then
  tree -a -I 'node_modules|.git|.next|.vercel|.turbo|dist|build|coverage|.DS_Store' -L 5
else
  find . \
    \( -path "./node_modules" -o -path "./.git" -o -path "./.next" -o -path "./.vercel" -o -path "./.turbo" -o -path "./dist" -o -path "./build" -o -path "./coverage" \) -prune \
    -o -print | sort
fi
echo

echo "=================================================="
echo "4. PACKAGE.JSON"
echo "=================================================="
if [ -f package.json ]; then
  cat package.json
else
  echo "package.json not found"
fi
echo

echo "=================================================="
echo "5. IMPORTANT CONFIG FILES"
echo "=================================================="
for f in \
  next.config.js \
  next.config.mjs \
  next.config.ts \
  tsconfig.json \
  jsconfig.json \
  vercel.json \
  middleware.ts \
  middleware.js \
  postcss.config.js \
  postcss.config.mjs \
  tailwind.config.js \
  tailwind.config.ts \
  eslint.config.js \
  .eslintrc.json \
  .prettierrc \
  .gitignore
do
  if [ -f "$f" ]; then
    echo "------------------------------"
    echo "FILE: $f"
    echo "------------------------------"
    cat "$f"
    echo
  fi
done

echo "=================================================="
echo "6. ENV FILES (ONLY VARIABLE NAMES, VALUES REDACTED)"
echo "=================================================="
shopt -s nullglob
for f in .env .env.local .env.development .env.production .env.example; do
  if [ -f "$f" ]; then
    echo "------------------------------"
    echo "FILE: $f"
    echo "------------------------------"
    grep -E '^[A-Za-z_][A-Za-z0-9_]*=' "$f" | sed 's/=.*$/=[REDACTED]/' || true
    echo
  fi
done
shopt -u nullglob

echo "=================================================="
echo "7. APP ROUTER FILE MAP"
echo "=================================================="
if [ -d app ]; then
  find app -type f \
    \( -name "page.tsx" -o -name "page.jsx" -o -name "layout.tsx" -o -name "layout.jsx" -o -name "route.ts" -o -name "route.js" -o -name "loading.tsx" -o -name "error.tsx" -o -name "not-found.tsx" -o -name "sitemap.ts" -o -name "robots.ts" \) \
    | sort
else
  echo "app/ not found"
fi
echo

echo "=================================================="
echo "8. KEY DIRECTORIES"
echo "=================================================="
for dir in app components lib public styles scripts data content hooks utils; do
  if [ -d "$dir" ]; then
    echo "------------------------------"
    echo "DIR: $dir"
    echo "------------------------------"
    find "$dir" \
      \( -path "$dir/node_modules" -o -path "$dir/.next" \) -prune \
      -o -type f | sort
    echo
  fi
done

echo "=================================================="
echo "9. PUBLIC / SEO / ADS FILES"
echo "=================================================="
for f in \
  public/ads.txt \
  public/robots.txt \
  app/robots.ts \
  app/sitemap.ts \
  app/layout.tsx \
  app/page.tsx
do
  if [ -f "$f" ]; then
    echo "------------------------------"
    echo "FILE: $f"
    echo "------------------------------"
    sed -n '1,240p' "$f"
    echo
  fi
done

echo "=================================================="
echo "10. FORM / EMAIL / RESEND REFERENCES"
echo "=================================================="
grep -RIn --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=.next \
  -E 'resend|EMAIL_FROM|RESEND_API_KEY|form|reset\(|useRef|useFormState|useActionState|action=' \
  app components lib scripts 2>/dev/null || true
echo

echo "=================================================="
echo "11. HERRAMIENTAS Y RUTAS CEA"
echo "=================================================="
find app -type f 2>/dev/null | grep -E 'herramientas|contacto|suscrib|guia|metodologia|fuentes|privacidad|terminos|mapa' | sort || true
echo

echo "=================================================="
echo "12. SUPABASE STRUCTURE"
echo "=================================================="
if [ -d supabase ]; then
  echo "supabase/ directory found"
  echo
  if command -v tree >/dev/null 2>&1; then
    tree -a supabase
  else
    find supabase -print | sort
  fi
  echo

  echo "------------------------------"
  echo "SUPABASE FILE CONTENT PREVIEW"
  echo "------------------------------"
  find supabase -type f \
    \( -name "*.sql" -o -name "*.toml" -o -name "*.json" -o -name "*.ts" -o -name "*.js" \) \
    | sort | while read -r f; do
      echo "FILE: $f"
      sed -n '1,240p' "$f"
      echo
    done
else
  echo "supabase/ directory not found"
fi
echo

echo "=================================================="
echo "13. SQL / MIGRATIONS ANYWHERE IN REPO"
echo "=================================================="
find . \
  \( -path "./node_modules" -o -path "./.git" -o -path "./.next" -o -path "./.vercel" \) -prune \
  -o -type f \( -name "*.sql" -o -name "*migration*" -o -path "*/migrations/*" \) -print | sort
echo

echo "=================================================="
echo "14. GIT STATUS"
echo "=================================================="
git status --short || true
echo

echo "=================================================="
echo "15. LAST COMMITS"
echo "=================================================="
git log --oneline -n 20 || true
echo

echo "=================================================="
echo "16. SUMMARY OF CRITICAL FILES TO REVIEW NEXT"
echo "=================================================="
find app components lib scripts -type f 2>/dev/null | grep -E \
'layout|footer|header|nav|sitemap|robots|contacto|suscrib|resend|herramientas|calculadora|vender-todo-el-anio|form' | sort || true
echo

echo "=================================================="
echo "SNAPSHOT COMPLETE"
echo "=================================================="
echo "Output file: $OUT_FILE"