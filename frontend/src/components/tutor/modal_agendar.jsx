import React, { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

export default function ModalAgendar(props) {
  const info = props;
  const post = 'http://3.135.234.254:3000/monitorProfile'
  let { user } = useParams();

  const [fecha, setFecha] = React.useState('');
  const [curso, setCurso] = React.useState('');



  const handleEstado = (e) =>{
    let index = e.target.selectedIndex;
    setFecha(e.target.options[index].text)
  }

  const handleChange = (e) =>{
    let index = e.target.selectedIndex;
    setCurso(e.target.options[index].text)
  }

  const handleClick = () => {
    info.appointment_set(curso, fecha, info.name)
    info.tutor_set(fecha)
    setTimeout(() => {
      alert('La cita se ha agregado exitosamente');
      info.onHide();
    })

  }

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header className="bg-indigo-1">
        <Modal.Title id="contained-modal-title-vcenter">
          <p className="modalHeader my-2">
            PROGRAMAR TUTORÍA
          </p>
        </Modal.Title>
        <button ><span className="material-icons" onClick={info.onHide}>close</span></button>
      </Modal.Header>
      <Modal.Body className="px-5">
        <select onChange={handleEstado} defaultValue="choice" className="select-design w-100">
          <option value="choice" disabled>Seleccione una fecha</option>
          {
            info.fechas.map((fecha) => {
              const index = info.fechas.indexOf(fecha)
              return(
                <option value={fecha} key={index}>{fecha}</option>
              );
            })
          }
        </select>

        <select onChange={handleChange} defaultValue="choice" className="select-design w-100 mt-4">
          <option value="choice" disabled>Seleccione una materia</option>
          {
            info.cursos.map((curso) => {
              const index = info.cursos.indexOf(curso)
              return(
                <option value={curso} key={index}>{curso}</option>
              );
            })
          }
        </select>
      </Modal.Body>
      <Modal.Footer className="mt-5">
        {/*<Button className={" mb-2"} onClick={info.onHide}>Cancelar</Button>*/}
        <button className={'btn btn-outline-tertiary mb-2'} onClick={handleClick}>Programar tutoría</button>
      </Modal.Footer>
    </Modal>
  );
}
