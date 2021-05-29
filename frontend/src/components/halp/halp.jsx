import React from 'react';
import step1 from '../../assets/step1.png';
import step2 from '../../assets/step2.png';
import step3 from '../../assets/step3.jpg';

export default function Home() {
  return (
    <div>
      <div className="container">
        <img className="fullScreen" src="https://uploads-ssl.webflow.com/5f3930fd1b6edd8815af569d/603130f999a1ba4a6179c234_Frame%2010.svg" alt="Inicio" height="300" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img className="" src={step1} alt="Inicio" height="400" />
          </div>
          <div className="col">
            <h1  className="titulo">
              Busca un tutor
            </h1>
            <h2 className="letra">
            "Ve al apartado de "buscar tutor", ingresa el curso en el cual deseas encontrar un tutor"
            </h2>
          </div>
        </div>
      </div>
      <div className="container">
        <img className="fullScreen" src="https://uploads-ssl.webflow.com/5f3930fd1b6edd8815af569d/60326a4c4c32c25e69c765ca_Frame%209.svg" alt="Inicio" height="200" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="titulo">
              Escoge al tutor para tu hijo
            </h1>
            <h2 className="letra">
             Con la ayuda de un tutor particular el estudiante puede desarrollar técnicas de estudio de una 
             manera proactiva y eficaz para preparación de exámenes, preparación preuniversitaria y para 
             mejorar su nivel académico en general. De primero se hace una busqueda,Luego de hacer la búsqueda,
            escoge el tutor que más se acomode a las necesidades educativas de tu hijo
            </h2>
          </div>
          <div className="col">
            <img className="" src={step2} alt="Inicio" height="400" />
          </div>
        </div>
      </div>
      <div className="container">
        <img className="fullScreen" src="https://uploads-ssl.webflow.com/5f3930fd1b6edd8815af569d/60326a4ca34f1059a8ee97ca_Frame%2014.svg" alt="Inicio" height="200" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img className="" src={step3} alt="Inicio" height="400" />
          </div>
          <div className="col">
            <h1 className="titulo">
              Haz una cita
            </h1>
            <h2 className="letra">
            "Luego de que hayas escogido a un tutor, selecciona "agendar cita" y busca una fecha en la cual se acomode a tu horario
            </h2>
          </div>
        </div>
      </div>
      <div className="container">
        <img className="fullScreen" src="https://uploads-ssl.webflow.com/5f3930fd1b6edd8815af569d/603130f9bbbc28774cff1f62_Frame%207.svg" alt="Inicio" height="400" />
      </div>
    </div>

  );
}
