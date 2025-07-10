import React, { useState } from 'react';
import { toros } from './data';
import './styles.css';
import { motion, AnimatePresence } from 'framer-motion';

const FichasPorPagina = 1;

const App = () => {
  const [pagina, setPagina] = useState(0);

  const inicio = pagina * FichasPorPagina;
  const torosPagina = toros.slice(inicio, inicio + FichasPorPagina);

  const siguiente = () => {
    if ((pagina + 1) * FichasPorPagina < toros.length) setPagina(pagina + 1);
  };

  const anterior = () => {
    if (pagina > 0) setPagina(pagina - 1);
  };

  return (
    <div className="catalogo-container">
      <h1 className="titulo">Catálogo de Toros</h1>

      <div className="catalogo-grid">
        <AnimatePresence mode="wait">
          {torosPagina.map((toro, index) => (
            <motion.div
              className="ficha-card"
              key={toro.nombre}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <img src={toro.imagen} alt={toro.nombre} className="ficha-img" />
              <div className="ficha-info">
                <h2>{toro.nombre}</h2>
                <p><strong>Raza:</strong> {toro.raza}</p>
                <p><strong>Origen:</strong> {toro.origen}</p>

                {toro.detalles?.length > 0 && (
                  <div className="ficha-detalle">
                    <h4>Detalles:</h4>
                    <ul>
                      {toro.detalles.map((d, i) => <li key={i}>{d}</li>)}
                    </ul>
                  </div>
                )}

                {toro.genealogia?.length > 0 && (
                  <div className="ficha-detalle">
                    <h4>Genealogía:</h4>
                    <ul>
                      {toro.genealogia.map((g, i) => <li key={i}>{g}</li>)}
                    </ul>
                  </div>
                )}

                {toro.video && (
                  <video className="ficha-video" controls>
                    <source src={toro.video} type="video/mp4" />
                    Tu navegador no soporta el video.
                  </video>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="controles">
        <button onClick={anterior} disabled={pagina === 0}>Anterior</button>
        <button onClick={siguiente} disabled={(pagina + 1) * FichasPorPagina >= toros.length}>Siguiente</button>
      </div>
    </div>
  );
};

export default App;

