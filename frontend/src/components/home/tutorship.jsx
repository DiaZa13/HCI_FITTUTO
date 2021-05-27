import React from 'react';
import TutorshipItem from './tutorshipItem';
import { tutorship_data } from '../utils/tutorship_data';

export default function Tutorship() {
  const data = tutorship_data();
  return (
    <div>
      <div className="w-100 text-center mt-5">
        <h1 className="text-secondary">APRENDE CUALQUIER ASIGNATURA</h1>
        <p>Variedad de asignaturas académicas para reforzar de la mano de un experto</p>
      </div>
      <div className="tutorship-container ">
        {
          data.map((item)=>{
            var index = data.indexOf(item);
            if(index < 3 ){
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
            }

          })
        }
      </div>
    </div>

  );
}


