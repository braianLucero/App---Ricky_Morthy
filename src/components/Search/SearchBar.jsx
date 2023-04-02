import { useState } from "react";
import "./Search.css";
export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  function handleChange(evento) {
    setId(evento.target.value);
  }
  return (
    <div className="search">
      <input
        className="input"
        onChange={handleChange}
        type="search"
        name="search"
        value={id}
      />
      <button className="boton" onClick={() => onSearch(id)}>
        Agregar
      </button>
    </div>
  );
}
