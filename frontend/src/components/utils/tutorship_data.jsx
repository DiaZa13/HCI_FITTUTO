import img from '../../assets/tutorship (1).png';
import img1 from '../../assets/tutorship (2).png';
import img2 from '../../assets/tutorship (3).png';
import img3 from '../../assets/tutorship (4).png';
import img4 from '../../assets/tutorship (5).png';
import img5 from '../../assets/tutorship (6).png';

export const tutorship_data = () => {
  const data =
  [{id: 0,
    title: "Matemática",
    description: "Refuerza los conocimientos de tu hijo en matemáticas. Aprende diversas maneras de solucionar un mismo problema.",
    redirect: "https://es.khanacademy.org/math",
    position: "left-tutorship",
    img: img,
  },
  {id: 1,
    title: "Idioma",
    description: "Practicando se logra la perfección. Tu hijo puede aprender la mejor pronunciación de su idioma favorito con hablantes nativos.",
    redirect: "https://es.duolingo.com/",
    position: " ",
    img: img1,},
  {id: 2,
    title: "Literatura",
    description: "Aprende sobre autores, tendencias, historia y estilos. Analiza la estructura de diversas obras famosas a lo largo de lo años",
    redirect: "https://concepto.de/literatura/",
    position: "right-tutorship",
    img: img2},
  {id: 3,
    title: "Cálculo",
    description: "¿Aún no comprendes los métodos para resolver integrales? Refuerza tus conocimientos de cálculo y aprende las mejores técnicas para la resolución de diversas integrales",
    redirect: "https://es.khanacademy.org/math/integral-calculus",
    position: " ",
    img: img3,},
  {id: 4,
    title: "Python",
    description: "Que ya no se te dificulte Python. Conoce la sintaxis básica de Python y vuélvete un expero en la programación.",
    redirect: "https://www.w3schools.com/python/",
    position: " ",
    img: img4,},
  {id: 5,
    title: "Excel",
    description: "El análisis de datos es una herramienta esencial en el mundo de negocios. Refuerza y aprende las mejores técnicas para un análisis rápido desde Excel",
    redirect: "https://www.galileo.edu/page/curso-microsoft-excel/",
    position: " ",
    img: img5,
  }];

  return data;
}
