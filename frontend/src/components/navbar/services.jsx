import React, { useState } from 'react';
import { Link, useRouteMatch, useParams } from 'react-router-dom';

export default function Services() {
  // const { url } = useRouteMatch();
  return (
    <div className="products">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item product-font ml-20">
          <div  className="noDecorations">
            <button className="nav-link button" type="button">
              Recomendación de tutor
            </button>
          </div>
        </li>
        <li className="nav-item product-font ml-20">
          <div  className="noDecorations">
            <button className="nav-link button" type="button">
              Sesiones programadas
            </button>
          </div>
        </li>
      </ul>
    </div>

  );
}
