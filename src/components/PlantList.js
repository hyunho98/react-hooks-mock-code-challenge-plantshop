import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants}) {
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then((r) => r.json())
      .then((data) => {
        setPlants(data)
      })
  }, [])

  const plantCards = plants.map((plant) => {
    return (
      <PlantCard 
        key={plant.id}
        name={plant.name} 
        image={plant.image} 
        price={plant.price} 
      />)
  })

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
