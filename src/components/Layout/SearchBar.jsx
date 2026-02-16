// SearchBar.jsx
import { useState, useEffect } from "react";

export default function SearchBar({ products, onSearch }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const filtered = products.filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        (p.description && p.description.toLowerCase().includes(query.toLowerCase()))
    );
    setSuggestions(filtered.slice(0, 5)); // mostrar max 5 sugerencias
  }, [query, products]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query);
    setQuery("");
    setSuggestions([]);
  };

  return (
    <div className="relative w-full">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full py-2 pl-4 pr-4 border rounded-full bg-white text-black focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
        />
      </form>

      {suggestions.length > 0 && (
        <ul className="absolute bg-white border w-full mt-1 rounded-md max-h-48 overflow-auto z-50">
          {suggestions.map((s, i) => (
            <li
              key={i}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => onSearch(s.name)}
            >
              {s.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
