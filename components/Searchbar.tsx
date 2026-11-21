"use client";

import { useState } from "react";
import { stays } from "../lib/stays";
import StayCard from "./StayCard";

interface SearchbarProps {
    stays: (typeof stays)[number][];
}

export default function Searchbar({ stays }: SearchbarProps) {
  const [query, setQuery] = useState(""); 

    const visible = stays.filter((s) =>
        (s.name + " " + s.location).toLowerCase().includes(query.toLowerCase())
    );

  return (
    <>
      <input
        className="search"
        placeholder="Search by name or city…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />
        <div className="grid">
            {visible.map((s) => (
                <StayCard key={s.id} stay={s} />
            ))}
        </div>
    </>
  );
}
                                      
  