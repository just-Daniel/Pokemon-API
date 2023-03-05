import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitPokemonData, fetchMorePokemonData } from "../redux/pokemonSlice";
import cls from './pokemon.module.css'
import PokemonItem from "./pokemonItem";
import PokemonDetails from "./pokemonDetails"


const PokemonContainer = () => {

  const [selectedPokemonUrl, setSelectedPokemonUrl] = useState(null);
  const dispatch = useDispatch();
  
  const pokemonData = useSelector((state) => state.pokemon.pokemonData);
  const currentPage = useSelector((state) => state.pokemon.currentPage);
  const status = useSelector((state) => state.pokemon.status);
  const error = useSelector((state) => state.pokemon.error);
  
  const s = useSelector((state) => state.pokemon);
  console.log(s);

  
  useEffect(() => {
    dispatch(fetchInitPokemonData());
  }, [dispatch]);
  
  const handleLoadMore = () => {
    dispatch(fetchMorePokemonData(currentPage));
  };
  
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  
  if (status === 'failed') {
    return <div>{error}</div>;
  }
  
  
  
  
  
    const handlePokemonClick = (url) => {
      setSelectedPokemonUrl(url);
    }
  
    return (
      <>
        <header className="App-header">
          Pokemon
        </header>
        <main className={cls.PokemonContainer}>
          <div className={cls.Pokemons}>
            {
              pokemonData?.map((pokemon, index) => (
                <PokemonItem key={pokemon.name + index} url={pokemon.url} onClick={() => handlePokemonClick(pokemon.url)} />
              ))
            }
          </div>
  
          {/* {selectedPokemonUrl && <PokemonDetails url={selectedPokemonUrl} />} */}
          <PokemonDetails url={selectedPokemonUrl} />
        </main>
        <footer>
          <button onClick={handleLoadMore}>Load more</button>
        </footer>
      </>
    )
  }
  

  
  
  export default PokemonContainer;