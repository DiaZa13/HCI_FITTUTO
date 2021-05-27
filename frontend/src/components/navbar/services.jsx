import React, { useState } from 'react';
import { Link, useRouteMatch, useParams } from 'react-router-dom';

export default function Services() {
  // const { url } = useRouteMatch();
  return (
    <div className="products">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item product-font ml-20">
          <div  className="noDecorations">
            <button className="services button" type="button">
              Tutores
            </button>
          </div>
        </li>
        <li className="nav-item product-font ml-20">
          <div  className="noDecorations">
            <button className="services button" type="button">
              Asignaturas
            </button>
          </div>
        </li>
      </ul>
    </div>

  );
}
