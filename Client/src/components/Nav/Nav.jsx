import React from "react";
import SearchBar from "../Search/SearchBar";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav({ onSearch }) {
  return (
    <div>
      <Link to="/">
        <button className="btn1"> Out</button>
      </Link>
      <Link to="/home">
        <button className="btn1">Home</button>
      </Link>
      <Link to="/about">
        <button className="btn1">About</button>
      </Link>
      <Link to="/favorites">
        <button className="btn1">Favorites</button>
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
