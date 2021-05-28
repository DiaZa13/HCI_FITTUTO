import React from 'react';
import { tutorship_data } from '../utils/tutorship_data';
import TutorItem from './tutorItem';
import TutorProfile from '../TutorProfile/TutorProfile';

export default function Tutor(props) {
  const data = tutorship_data();
  return (
    <div>
      <div className="w-100 text-center">
        <div className="w-10 border-bottom  py-4" >
          <select defaultValue="choice" className="select-design">
            <option value="choice" disabled>Seleccione una materia</option>
            {/*{*/}
            {/*  info.monitors.map((monitor) => {*/}
            {/*    const index = info.monitors.indexOf(monitor)*/}
            {/*    return(*/}
            {/*      <option value={monitor.nombre} key={index}>{monitor.nombre}</option>*/}
            {/*    );*/}
            {/*  })*/}
            {/*}*/}
            <option>Algo</option>
          </select>
          <button className="btn btn-tertiary ms-3 p-2">Filtrar</button>
        </div>
      </div>
      <div className="tutorship-container ">
        {/*{*/}
        {/*  data.map((item)=>{*/}
        {/*    var index = data.indexOf(item);*/}
        {/*    if(index < 3 ){*/}
        {/*      return(*/}
        {/*        <TutorshipItem*/}
        {/*          key = {item.id}*/}
        {/*          title={item.title}*/}
        {/*          description={item.description}*/}
        {/*          redirect={item.redirect}*/}
        {/*          position={item.position}*/}
        {/*          img={item.img}*/}
        {/*        />*/}
        {/*      )*/}
        {/*    }*/}

        {/*  })*/}
        {/*}*/}
        <TutorItem/>
      </div>
    </div>

  );
}


