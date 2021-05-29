/*import img from '../../assets/tutorship (1).png';
import img1 from '../../assets/tutorship (2).png';
import img2 from '../../assets/tutorship (3).png';
import img3 from '../../assets/tutorship (4).png';
import img4 from '../../assets/tutorship (5).png';
import img5 from '../../assets/tutorship (6).png';*/

export const tutors = () => {
  const data =
    [{id: 0,
      name: "Juan Carlos Gonzales",
      costo: 200,
      score: 3,
      assignments: ['Matemática', 'Idioma', 'Literatura'],
      available:['Lunes → 4:00PM', 'Martes → 3:00PM', 'Miércoles → 5:00PM', 'Jueves → 2:00PM'],
      comments:['Muy buen maestro', 'Su método de enseñanza no es muy efectivo']
    }];

  return data;
}
