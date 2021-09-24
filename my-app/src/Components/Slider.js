import React from 'react'
import Slider1 from '../assets/Slider 1.jpg'
import Slider2 from '../assets/Slider 2.png'
import Slider3 from '../assets/Slider 3.jpg'
import Slider4 from '../assets/Slider 4.png'
import Slider5 from '../assets/Slider 5.png'
import Slider6 from '../assets/Slider 6.png'

const Slider = () => {
    return (
        <div className="Slider-Box">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Slider1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Slider2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Slider3} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Slider4} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Slider5} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Slider6} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}

export default Slider
