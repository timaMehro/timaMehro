import React, { useState } from "react"

const animalData = [
  { name: "Eagle", class: "Birds" },
  { name: "Penguin", class: "Birds" },
  { name: "Parrot", class: "Birds" },
  { name: "Lion", class: "Mammals" },
  { name: "Tiger", class: "Mammals" },
  { name: "Elephant", class: "Mammals" },
  { name: "Cobra", class: "Reptiles" },
  { name: "Lizard", class: "Reptiles" },
  { name: "Tortoise", class: "Reptiles" },
  { name: "Salmon", class: "Fish" },
  { name: "Shark", class: "Fish" },
  { name: "Trout", class: "Fish" },
]

const LabelFilter = () => {
  const [filtred, setFiltered] = useState(animalData)

  // function getFilteredArry(myName){
  //  const  flteredAnimal= animalData.filter((item)=> item.name === myName )
  //  setFiltered(flteredAnimal)
  //  return getFilteredArry
  // }

  return (
    <div>
      <div data-testid="labels-wrapper-id" className="label-container">
        {filtred.map((animalClass) => (
          <div data-testid="label-id" className="label" key="animalClass.name">
            {animalClass.name}
          </div>
        ))}
      </div>
      <div data-testid="tile-container-id" className="tile-container">
        {animalData.map((animal) => (
          <div data-testid="animal-tile-id" className="tile" key={animal.name}>
            {animal.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LabelFilter
