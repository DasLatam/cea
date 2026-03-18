"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import ResultsTable from "@/components/ResultsTable";
import AdBanner from "@/components/AdBanner";

export default function Home() {
  const [data, setData] = useState([]);

  async function search(q: string) {
    const res = await fetch(`/api/ml/search?q=${q}`);
    const json = await res.json();
    setData(json);
  }

  return (
    <div>
      <SearchBar onSearch={search} />
      <AdBanner />
      <ResultsTable data={data} />
    </div>
  );
}
