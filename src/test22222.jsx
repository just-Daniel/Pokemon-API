import { useState, useEffect } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => setPokemons(data.results));
      
    fetch("https://pokeapi.co/api/v2/type?limit=999")
      .then((response) => response.json())
      .then((data) => setTypes(data.results));
  }, []);

  useEffect(() => {
    if (selectedType !== "") {
      fetch(`https://pokeapi.co/api/v2/type/${selectedType}`)
        .then((response) => response.json())
        .then((data) => {
          const pokemonNames = data.pokemon.map((pokemon) => pokemon.pokemon.name);
          setFilteredPokemons(pokemonNames);
        });
    } else {
      setFilteredPokemons([]);
    }
  }, [selectedType]);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const filteredPokemonList = selectedType !== "" ? filteredPokemons : pokemons;

  return (
    <div>
      <label htmlFor="type-select">Filter by type:</label>
      <select id="type-select" value={selectedType} onChange={handleTypeChange}>
        <option value="">All</option>
        {types.map((type) => (
          <option key={type.name} value={type.name}>{type.name}</option>
        ))}
      </select>

      <ul>
        {filteredPokemonList.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;