import React from 'react';
import abIm from "../Assets/Images/about-hero.png";
import {Link} from "react-router-dom";  



export default function About() {
  return (
    <div className="About--contianer">
      <img src={abIm} alt="boss" className="Img" />
      <h1 className="about--title">Don't squeeze in a sedan when 
      you could relax in a van</h1>
      <p className="abt--paragraph">Our mission is to enliven your road trip with the perfect travel van rental.
  Our vans are recertified before each trip
        to ensure your travel plans can go off without hitch.
        (Hitch costs extra)
      </p>
      <p className="abt--paragraph__2">Our team is full vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels </p>
      <div className="abt--container">
        <h3 className="abt--h2__1">Your destination is waiting.</h3>
        <h3 className="abt--h2__2">Your van is ready.</h3>
        <Link  className="btn--black" to="/vans">Explore our vans</Link>
      </div>
    </div>    
    )
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // import Confetti from 'react-confetti';
  
  
  
