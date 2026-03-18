"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }: any) {
  const [query, setQuery] = useState("");

  return (
    <div style={{ display: "flex", gap: 10 }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar producto..."
        style={{ padding: 10, flex: 1 }}
      />
      <button onClick={() => onSearch(query)}>Buscar</button>
    </div>
  );
}
