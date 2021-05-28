import React from 'react';
import img from '../../assets/teachers (2).png'
import ModalAgendar from './modal_agendar';

export default function TutorItem() {
  const [modalShow, setModalShow] = React.useState(false);

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
            <h4 className="mb-1">JUANITO GONZALES</h4>
            <small className="mb2">Q200 por hora</small>
            <div className="d-flex my-1">
              <span className="material-icons text-secondary tutor-review">star_rate</span>
              <span className="material-icons text-secondary tutor-review">star_rate</span>
              <span className="material-icons text-secondary tutor-review">star_rate</span>
              <span className="material-icons text-secondary tutor-review">star_rate</span>
              <span className="material-icons text-secondary tutor-review">star_outline</span>
            </div>
          </div>
          <button className="button" onClick={() => setModalShow(true)}>
            <span className="material-icons text-primary" style={{fontSize:"50px"}}>event_available</span>
          </button>
          <ModalAgendar
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </div>

  );
}


