import React from 'react';
import img from '../../assets/teachers (2).png'
import ModalAgendar from './modal_agendar';

export default function TutorItem(props) {
  const [modalShow, setModalShow] = React.useState(false);

  const stars = [];
  let count = 0;
  let total_stars = 0

  while(total_stars < 5){
    if (count < props.score){
      stars.push(<span className="material-icons text-secondary tutor-review" key={count}>star_rate</span>)
      count +=1;
    }else{
      stars.push(<span className="material-icons text-secondary tutor-review">star_outline</span>)
    }
    total_stars += 1;
  }

  return (
    <div className="tutor-item-container m-5" style={{width: "400px"}}>
      <div>
        <div id="tutor_img">
          <img src={img} alt="User" width={"400px"} className="tutor-user-img"/>
        </div>
        <div className="tutor-cover"/>
      </div>
      <div id="tutor_description" className="mt-2 pl-2">
        <div className="d-flex justify-content-between">
          <div className="ms-2">
            <h4 className="mb-1">{props.name}</h4>
            <small className="mb2">Q{props.costo} por hora</small>
            <div className="d-flex my-1">
              {stars}
            </div>
          </div>
          <button className="button" onClick={() => setModalShow(true)}>
            <span className="material-icons text-primary" style={{fontSize:"50px"}}>event_available</span>
          </button>
          <ModalAgendar
            show={modalShow}
            onHide={() => setModalShow(false)}
            cursos={props.cursos}
            fechas={props.fechas}
            name={props.name}
            tutor_set={(fecha) => props.tutor_set(fecha)}
            appointment_set={(curso, fecha, tutor) => props.appointment_set(curso, fecha, tutor)}
          />
        </div>
      </div>
    </div>

  );
}


