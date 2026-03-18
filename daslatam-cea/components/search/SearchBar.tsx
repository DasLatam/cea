"use client";

import { useState } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
  loading?: boolean;
  defaultValue?: string;
};

export default function SearchBar({ onSearch, loading = false, defaultValue = "" }: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(query);
  }

  return (
    <form className="search-card" onSubmit={handleSubmit}>
      <div>
        <p className="section-label">Explorador de productos</p>
        <h2>Buscar oportunidades en Mercado Libre Argentina</h2>
        <p className="muted">
          El sistema intenta primero la API pública, luego el token OAuth propio del backend y después una reconstrucción desde HTML público. Si todo falla, muestra el error real y el estado de conectores, sin inventar datos.
        </p>
      </div>

      <div className="search-row">
        <input
          className="search-input"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ej.: kit para yoga, freidora de aire, organizador de cocina"
          aria-label="Buscar producto"
        />
        <button className="primary-button" disabled={loading} type="submit">
          {loading ? "Analizando..." : "Buscar"}
        </button>
      </div>
    </form>
  );
}
