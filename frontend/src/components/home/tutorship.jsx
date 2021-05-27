import React from 'react';
import TutorshipItem from './tutorshipItem';
import { tutorship_data } from '../utils/tutorship_data';

export default function Tutorship() {
  const data = tutorship_data();
  return (
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

  );
}


