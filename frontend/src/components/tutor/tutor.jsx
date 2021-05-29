import React from 'react';
import { tutorship_data } from '../utils/tutorship_data';
import TutorItem from './tutorItem';

export default function Tutor(props) {
  const data = tutorship_data();
  return (
    <div>
      <div className="w-100 text-center">
        <div className="w-10 border-bottom py-4" >
          <select defaultValue="choice" className="select-design w-50">
            <option value="choice" disabled>Seleccione una materia</option>
            {
              data.map((materia) => {
                return(
                  <option key={materia.id} value={materia.title}>{materia.title}</option>
                );
              })
            }
          </select>
          <button className="btn btn-tertiary ms-3 p-2 px-4">Filtrar</button>
        </div>
      </div>
      <div className="tutorship-container ">
        {
          props.tutor_list.map((tutor) => {
            return(
              <TutorItem
              key={tutor.id}
              name={tutor.name}
              costo={tutor.costo}
              score={tutor.score}
              cursos={tutor.assignments}
              fechas={tutor.available}
              tutor_set={(fecha) => props.tutor_set(tutor.id,fecha)}
              appointment_set={(curso, fecha, tutor) => props.appointments_set(curso, fecha, tutor)}
              />
            )
          })
        }
      </div>
    </div>

  );
}


