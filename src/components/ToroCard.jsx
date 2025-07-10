import React from "react";
import "./../styles.css";

const ToroCard = ({ toro }) => (
  <div className="ficha">
    <img src={toro.imagen} alt={toro.nombre} className="ficha-img" />
    <div className="ficha-info">
      <h2>{toro.nombre}</h2>
      <p><strong>Raza:</strong> {toro.raza}</p>
      <p><strong>Origen:</strong> {toro.origen}</p>
      <div className="ficha-detalle">
        <h4>Detalles</h4>
        <ul>{toro.detalles.map((d, i) => <li key={i}>{d}</li>)}</ul>
        <h4>Genealogía</h4>
        <ul>{toro.genealogia.map((g, i) => <li key={i}>{g}</li>)}</ul>
      </div>
    </div>
  </div>
);

export default ToroCard;
