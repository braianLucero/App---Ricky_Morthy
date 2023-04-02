import React from "react";
import SearchBar from "../Search/SearchBar";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div>
      <Link to="/home">
        <button className="btn1">Home</button>
      </Link>
      <Link to="/about">
        <button className="btn1">About</button>
      </Link>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
