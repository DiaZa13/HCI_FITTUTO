import React from 'react';
import img from '../../assets/carousel.png';
import img1 from '../../assets/carousel1.png';
import img2 from '../../assets/carousel2.png';
import img3 from '../../assets/carousel3.png';

export default function Carousel() {
  return (
    <div className="carousel-container">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                  className="active" aria-current="true" aria-label="Slide 1"/>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                  aria-label="Slide 2"/>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                  aria-label="Slide 3"/>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                  aria-label="Slide 4"/>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img2} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img1} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..."/>
          </div>
        </div>
      </div>
    </div>

  );
}

