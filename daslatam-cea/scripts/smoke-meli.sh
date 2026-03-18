#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:-http://localhost:3000}"
QUERY="${2:-kit para yoga}"

printf '\n== /api/meli/status ==\n'
curl -sS "$BASE_URL/api/meli/status" | sed 's/{/\n{/g'

printf '\n\n== /api/meli/users-me ==\n'
curl -sS "$BASE_URL/api/meli/users-me" | sed 's/{/\n{/g'

printf '\n\n== /api/ml/search ==\n'
curl -sS "$BASE_URL/api/ml/search?q=$(python3 - <<PY
import urllib.parse
print(urllib.parse.quote('''$QUERY'''))
PY
)" | sed 's/{/\n{/g'

printf '\n'
