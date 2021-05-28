import React from 'react';
import TutorshipItem from '../home/tutorshipItem';
import { tutorship_data } from '../utils/tutorship_data';

export default function Asignaturas() {
  const data = tutorship_data();
  return (
    <div>
      <div className="w-100 text-center mt-5">
        <h1 className="text-secondary">AHORA, APRENDER ES FÁCIL</h1>
        <p>Con nuestros expertos en diversas áreas, adquiere conocimiento en la asignatura que desees</p>
      </div>
      <div className="tutorship-container ">
        {
          data.map((item)=>{
              return(
                <TutorshipItem
                  key = {item.id}
                  title={item.title}
                  description={item.description}
                  redirect={item.redirect}
                  position={item.position}
                  img={item.img}
                />
              )
          })
        }
      </div>
    </div>

  );
}


