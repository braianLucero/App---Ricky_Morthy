import React from "react";
import SearchBar from "./SearchBar";
import "./Nav.css";
export default function ({ onSearch }) {
  return (
    <div className="nav">
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
