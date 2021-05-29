import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import NavBar from '../navbar/navbar';
import Home from '../home/home';
import Halp from '../halp/halp'
import Tutor from '../tutor/tutor';
import Asignaturas from '../asignaturas/asignaturas';
import Exercises from '../Exercises/Exercises';
import TutorProfile from '../TutorProfile/TutorProfile';
import References from '../References/References';
import Context from '../../context/context';
import {tutors} from '../utils/tutors_data';

export default function Dashboard() {
  const { user } = useParams();
  const { path } = useRouteMatch();
  const [tutor, setTutor] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(()=>{
    setTutor(tutors)
  },[]);

  function addAppointment(curso, fecha, tutor){
    setAppointments([...appointments, [{curso:curso},{fecha:fecha},{tutor:tutor}]])
   console.log(appointments)
   };
 
   const deleteDate = (id, fecha) =>{
     var tutores = tutor;
     var index = tutores.findIndex(i => i.id === id);
     var index_date = tutores[index].available.indexOf(fecha)
     tutores[index].available.splice(index_date,1);
     setTutor(tutores);
   }
  console.log(appointments);
  return (
    <div id="main-container">
      <div>
        <NavBar />
        <Switch>
          <Route path={`${path}/tutorprofile/references`}>
            <References/>
          </Route>
          <Route path={`${path}/help`}>
            <Halp/>
          </Route>
          <Route path={`${path}/assignments`}>
            <Asignaturas/>
          </Route>
          <Route path={`${path}/context`}>
            <Context
              appointments={appointments}/>
          </Route>
          <Route path={`${path}/tutor`}>
            <Tutor
              tutor_list={tutor}
              tutor_set={(id, fecha)=> deleteDate(id, fecha)}
              appointments_set={(curso, fecha, tutor)=> addAppointment(curso, fecha, tutor)}
            />
          </Route>
          <Route path={`${path}/exercises`}>
            <Exercises/>
          </Route>
          <Route path={`${path}/tutorprofile`}>
            <TutorProfile/>
          </Route>
          <Route exact path={path} children={<Home/>}/>
        </Switch>
      </div>
    </div>
  );
}
