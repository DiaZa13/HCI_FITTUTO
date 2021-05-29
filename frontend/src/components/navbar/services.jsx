import React, { useState } from 'react';
import { Link, useRouteMatch, useParams } from 'react-router-dom';

export default function Services() {
  const { url } = useRouteMatch();

  return (
    <div className="products">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item product-font ml-20">
          <div  className="noDecorations">
            <Link
              to={`${url}/tutor`}
               className="services"
               type="button"
            >
              Tutores
            </Link>
          </div>
        </li>
        <li className={"nav-item product-font ml-20"}>
          <Link
            to={`${url}/assignments`}
            className="services"
            name="asignatura"
            type="button">
            Asignaturas
          </Link>
        </li>
        <li className={"nav-item product-font ml-20"}>
          <Link
            to={`${url}/context`}
            className="services"
            name="context"
            type="button">
            Sesiones
          </Link>
        </li>
        <li className={"nav-item product-font ml-20"}>
          <Link
            to={`${url}/Exercises`}
            className="services"
            type="button">
            Ejercicios
          </Link>
        </li>
        <li className={"nav-item product-font ml-20"}>
          <Link
            to={`${url}/TutorProfile`}
            className="services"
            type="button">
            Perfil Tutor
          </Link>
        </li>
      </ul>
    </div>

  );
}
