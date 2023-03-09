import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  function onNewPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  const visiblePlants = plants.filter((plant) => {
    if (search === "") {
      return true
    } else {
      return (plant.name.toUpperCase().includes(search.toUpperCase()))
    }
  })

  return (
    <main>
      <NewPlantForm onNewPlant={onNewPlant}/>
      <Search setSearch={setSearch}/>
      <PlantList plants={visiblePlants} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
