import React, { useState } from 'react';
import img from '../../assets/teachers (2).png';
import img1 from '../../assets/calendario.jpg';
import img2 from '../../assets/reseña.png';
import './TutorProfile.scss';
export default function tutorProfile() {
  return (
    <div className="tutor-container p-5 bg-primary">
      <img src={img} alt="Tutor" className="tutor-img"/>
      <div className="tutor-text bg-white">
        <div className="elements">
          <h2>Juanito Gonzales</h2>
          <button className="btn-calendario"><img src={img1} alt="calendar-img" className="calendar-img"/> </button>
          <button className="btn-reseña"><img src={img2} alt="reseña-img" className="reseña-img"/></button>
          
        </div>
        <span className="divider"/>
        <h5>Cursos: Matemática, Ingles, Comunicación</h5>
        <p className="mt-5">
        Mi objetivo es compartir conocimiento y experticia que tengo matemática, ingles y comunicación para enseñar a 
        los estudiantes fuera del salón de clases, de hecho, en la mayoría de los centros educativos, la labor que yo
        desempeño es incluida dentro de su oferta de actividades extracurriculares.
        </p>
      </div>
    </div>

  );
}
