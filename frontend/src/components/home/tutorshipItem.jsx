import React from 'react';

export default function TutorshipItem(props) {
  const tutorship = props;
  return (
    <div>
      <div className={`card card-dimensions ${tutorship.position}` } >
        <img className={`card-img-top h-75 ${tutorship.position}`} src={tutorship.img} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{tutorship.title}</h5>
            <p className="card-text">{tutorship.description}</p>
            <div className="d-flex ">
              <a href={tutorship.redirect} className="tutorship-link">LEER MÁS</a>
              <span className="material-icons ms-1" style={{fontSize: "17px"}}>arrow_forward</span>
            </div>
          </div>
      </div>
    </div>

  );
}


