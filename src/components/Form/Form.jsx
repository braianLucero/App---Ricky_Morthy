import "./Form.css";
import React from "react";

export default function Form() {
  return (
    <div className="contenedor-form">
      <form className="formulario">
        <label>
          <input type="email" placeholder="Correo ELectronico" />
        </label>
        <label>
          <input type="password" placeholder="Contraseña" />
        </label>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
