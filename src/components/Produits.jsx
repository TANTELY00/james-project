import React from 'react';
import sampleImage from "../image/2.png";
import '../css/voiture.css';
import { Link } from 'react-router-dom';

function Produits() {
  
  const cars = [
    {
      id: 1,
      name: "Tesla Model S",
      description: "Une voiture électrique haut de gamme offrant une autonomie exceptionnelle et des performances impressionnantes.",
      image: "/images/é",
      price:"20000 ar",
      destination:"Vangaindrano - Midongy"
    },
    {
      id: 2,
      name: "BMW Série 3",
      description: "Une berline sportive avec un équilibre parfait entre luxe, performances et confort.",
      image: "/images/bmw_serie_3.jpg",
      price:"20000 ar",
      destination:"Vangaindrano - Midongy"
    },
    {
      id: 3,
      name: "Audi A4",
      description: "Une voiture de luxe compacte offrant des fonctionnalités de haute technologie et une conduite dynamique.",
      image: "/images/audi_a4.jpg",
      price:"20000 ar",
      destination:"Vangaindrano - Midongy"
    },
  ];

  return (
    <div className="car-list">
    {cars.map((car) => (
      <div key={car.id} className="car-card">
        <div className="car-image">
            <img src={sampleImage} alt="Sample"/>
        </div>
        <div className="car-description">
          <h2>{car.name}</h2>
          <p>{car.description}</p>
          <p><strong>Destination :</strong> {car.destination}</p>
          <p><strong>Prix de location :</strong> {car.price}</p>
          <Link to="/register">
            <button className="reserve-button">Réserver</button>
          </Link>
        </div>
      </div>
    ))}
   </div>
  );
}

export default Produits;
