import React from 'react';
import img from '../../assets/tutor3.png'

export default function TutorItem() {
  return (
    <div className="d-flex flex-column m-5" style={{width: "400px"}}>
      <div id="tutor_img">
        <img src={img} alt="User" width={"400px"}/>
      </div>
      <div id="tutor_description" className="mt-2">
        <div className="d-flex justify-content-between">
          <div className="ms-2">
            <h3 className="mb-1">JUANITO GONZALES</h3>
            <small className="mb2">Q200 por hora</small>
            <div className="d-flex mt-1">
              <span className="material-icons text-secondary tutor-review">star_rate</span>
              <span className="material-icons text-secondary tutor-review">star_rate</span>
              <span className="material-icons text-secondary tutor-review">star_rate</span>
              <span className="material-icons text-secondary tutor-review">star_rate</span>
              <span className="material-icons text-secondary tutor-review">star_outline</span>
            </div>
          </div>
          <span className="material-icons text-tertiary me-2">date_range</span>
        </div>
      </div>
    </div>

  );
}


