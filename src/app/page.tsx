import React, { Component } from 'react'
import Menu from './components/Menu/Menu';
export default function Home(){
  return (
    <main>
    
<Menu>

</Menu>

 <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://shorturl.at/pqyyH" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
    <p>Lorem ipsum dolor sit</p>
  </div>
    </div>
    <div className="carousel-item">
      <img src="https://rb.gy/i15d4n"  alt="..."/> 
      {/* <img src="https://fixthephoto.com/images/content/portrait-image.jpg" alt="..." /> */}
      
      <div className="carousel-caption d-none d-md-block">
      <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
      <p>Lorem ipsum dolor sit</p>
  </div>
    </div>
    <div className="carousel-item">
      <img src="https://rb.gy/x1j9ef"  alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
      <p>Lorem ipsum dolor sit</p>
  </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 





  </main>
  
  )
}