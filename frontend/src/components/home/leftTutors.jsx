import React from 'react';
import img from '../../assets/tutor.png';

export default function LeftTutors() {
  return (
    <div className="tutor-container p-5 bg-primary">
      <img src={img} alt="Tutor" className="tutor-img"/>
      <div className="tutor-text bg-white">
        <h1>Tutores altamente capacitados</h1>
        <span className="divider"/>
        <p className="mt-5">
         Cada tutor ha sido ha sido capacitado con las mejores herramientas y prácticas educativas, fácilmente adaptables
          para satisfacer las necesidades individuales de cada estudiante. Existe una amplia gama de tutores en diversas
          asignaturas académicas, cada uno especializado en el área.
        </p>
      </div>
    </div>

  );
}


