import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedPokemon } from "../redux/pokemonSlice";
import cls from './pokemon.module.css'

const PokemonItem = ({ url }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const dispatch = useDispatch();
  const titleName = pokemonData?.name?.charAt(0)?.toUpperCase() + pokemonData?.name?.slice(1);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setPokemonData(data);
    };
    fetchData();
  }, [url]);

  const handleClick = () => {
    dispatch(setSelectedPokemon(pokemonData));
  }

  return (
    <div>
      {pokemonData ? (
        <div className={cls.PokemonItem} onClick={handleClick}>
          <h2>{titleName}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <PokemonType types={pokemonData.types} />

        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

const PokemonType = ({types}) => {

  return (
      <div className={cls.PokemonType}>
          {
              types.map(({type}, index) => {
                  const typeName = type.name.charAt(0).toUpperCase() + type.name.slice(1);

                  return <span key={type.name + '_' + index}>{typeName}</span>
              })
          }
      </div>
  )
}

export default PokemonItem;