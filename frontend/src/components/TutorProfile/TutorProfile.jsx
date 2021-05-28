import React, { useState } from 'react';
import img from '../../assets/teachers (2).png';
import img2 from '../../assets/reseña.jpg';
import './TutorProfile.scss';
import ModalAgendar from '../tutor/modal_agendar';

export default function tutorProfile() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="genereal">
    <div className="tutor-container p-5 bg-primary">
      <img src={img} alt="Tutor" className="tutor-img"/>
      <div className="tutor-text bg-white">
        <div className="elements">
          <h2>Juanito Gonzales</h2>
          <button className="btn-calendario" onClick={() => setModalShow(true)}>
            <span className="material-icons text-primary" style={{fontSize:"30px"}}>event_available</span></button>
            <ModalAgendar
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <button className="btn-reseña" >
          <span className="material-icons create" style={{fontSize:"30px", color:"#263238"}}>create</span></button>
        </div>
        <div className="d-flex my-1">
              <h5>Calificación:</h5>
              <span className="material-icons text-secondary tutor-review">star_rate</span>
              <span className="material-icons text-secondary tutor-review">star_rate</span>
              <span className="material-icons text-secondary tutor-review">star_rate</span>
              <span className="material-icons text-secondary tutor-review">star_rate</span>
              <span className="material-icons text-secondary tutor-review">star_outline</span>
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
    <h1>Reseñas de Juanito Gonzales</h1>
    </div>
  );
}