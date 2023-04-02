import "./Form.css";
import React from "react";
import { useState } from "react";
import validate from "../validation";

export default function Form({ login }) {
  const [data, setData] = useState({
    name: "",
    password: "",
  });

  const [error, setError] = useState({
    name: "",
    password: "",
  });
  function handleChange(evento) {
    setData({ ...data, [evento.target.name]: evento.target.value });
    setError(validate({ ...data, [evento.target.name]: evento.target.value }));
  }

  function handleSumbmit(evento) {
    evento.preventDefault();
    login(data);
  }

  return (
    <div className="contenedor-form">
      <form className="formulario" onSubmit={handleSumbmit}>
        <label>
          <input
            onChange={handleChange}
            type="email"
            name="name"
            value={data.name}
            placeholder="Correo ELectronico"
          />
        </label>
        {/* {error.name && <p style={{ color: "red" }}>{error.name}</p>} */}
        <label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={data.password}
            placeholder="Contraseña"
          />
        </label>
        {error.password && <p style={{ color: "black" }}> {error.password}</p>}

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
