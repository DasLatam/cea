"use client";

import { useEffect, useState } from "react";

function detectAdBlock(): Promise<boolean> {
  return new Promise((resolve) => {
    const bait = document.createElement("div");
    bait.className = "adsbox pub_300x250 text-ad banner-ad ad-unit";
    bait.style.cssText = "position:absolute;left:-9999px;top:-9999px;height:10px;width:10px;";
    document.body.appendChild(bait);

    window.setTimeout(() => {
      const blocked =
        bait.offsetHeight === 0 ||
        bait.clientHeight === 0 ||
        getComputedStyle(bait).display === "none" ||
        getComputedStyle(bait).visibility === "hidden";

      bait.remove();
      resolve(blocked);
    }, 120);
  });
}

export default function AntiAdBlockGate() {
  const [blocked, setBlocked] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;
    void detectAdBlock().then((result) => {
      if (!active) return;
      setBlocked(result);
      setReady(true);
      document.body.classList.toggle("adblock-locked", result);
    });

    return () => {
      active = false;
      document.body.classList.remove("adblock-locked");
    };
  }, []);

  async function retryCheck() {
    const result = await detectAdBlock();
    setBlocked(result);
    document.body.classList.toggle("adblock-locked", result);
  }

  if (!ready || !blocked) return null;

  return (
    <div className="adblock-overlay" role="dialog" aria-modal="true" aria-labelledby="adblock-title">
      <div className="adblock-card">
        <p className="section-label">Acceso financiado con anuncios</p>
        <h2 id="adblock-title">Desactivá el bloqueo de anuncios para continuar</h2>
        <p>
          Detectamos una extensión o herramienta que bloquea anuncios. DAS LATAM CEA se financia con
          publicidad para mantener gratuitas las herramientas de análisis y las guías operativas.
        </p>
        <p>
          Permití anuncios para este dominio y luego tocá el botón de verificación. Mientras el bloqueo
          siga activo, el sitio permanecerá bloqueado.
        </p>
        <div className="adblock-actions">
          <button type="button" className="primary-button" onClick={retryCheck}>
            Ya lo desactivé · volver a verificar
          </button>
        </div>
      </div>
    </div>
  );
}
