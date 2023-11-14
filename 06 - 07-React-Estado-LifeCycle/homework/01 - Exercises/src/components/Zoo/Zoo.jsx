import React from "react";
import Animals from "../Animals/Animals";
import Species from "../Species/Species";

export default function Zoo() {
  // Estado inicial del componente
  const [zoo, setZoo] = React.useState({
    zooName: "",
    animals: [],
    species: [],
    allAnimals: [],
  });

  // Maneja cambios en el input del nombre del zoo
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setZoo({ ...zoo, zooName: newValue });
  };

  // Efecto secundario para cargar datos del servidor al montar el componente
  React.useEffect(() => {
    fetch("http://localhost:3001/zoo")
      .then((res) => res.json())
      .then((data) =>
        setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
        })
      )
      .catch((error) => console.log(error));
  }, []);

  // Manejadores de eventos para manipular las especies
  const handleSpecies = (event) => {
    const { value } = event.target;

    setZoo({
      ...zoo,
      animals: zoo.allAnimals.filter((animal) => animal.specie === value),
    });
  };

  const handleAllSpecies = () => {
    setZoo({
      ...zoo,
      animals: zoo.allAnimals,
    });
  };

  return (
    <div>
      {/* Input para el nombre del zoo */}
      <label>Zoo Name:</label>
      <input type="text" value={zoo.zooName} onChange={handleInputChange} />

      {/* Muestra el nombre del zoo */}
      <h1>{zoo.zooName}</h1>

      {/* Componente Species con propiedades */}
      <Species
        species={zoo.species}
        handleSpecies={handleSpecies}
        handleAllSpecies={handleAllSpecies}
      />

      {/* Componente Animals con propiedades */}
      <Animals animals={zoo.animals} />
    </div>
  );
}
