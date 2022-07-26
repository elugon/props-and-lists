import './App.css';
import React, { useState } from 'react';
import animalData from './data.json';
import Card from './components/Card';

function App() {

  const [animals,setAnimals]= useState(animalData)

  const handleSortByLife=()=>{
   const ordered= animals.sort((a,b)=>a.lifeExpectancy-b.lifeExpectancy)
   setAnimals(ordered)
  }

  const onlyDogs = () => {
    const dogs = animals.filter(elem => elem.type === "dog");
    setAnimals(dogs);
  }


  return (
    <div className="App">
      <h1>Adopt me plz 🐾</h1>
      <button className="action-btn" onClick={handleSortByLife}>Sort by life expectancy</button>
      <button className="action-btn" onClick={onlyDogs}>Filter by dogs</button>
      {animals.map(ele=>{
        return <Card key={ele.name} animal={ele} />
      })}
    </div>
  );
}

export default App;
