import React from "react";
import { useSelector } from "react-redux";
import cls from './pokemon.module.css'

const PokemonDetails = () => {
    const pokemonData = useSelector((state) => state.pokemon.selectedPokemon);
    const titleName = pokemonData?.name?.charAt(0)?.toUpperCase() + pokemonData?.name?.slice(1);


    return (
    <div className={cls.PokemonDetails_Container}>
        {
        Object.keys(pokemonData).length ?
        <div className={cls.PokemonDetails}>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
            <h2>{titleName}</h2>
            <table>
                <thead>
                <tr>
                    <th>Stat Name</th>
                    <th>Stat Value</th>
                </tr>
                </thead>
                <tbody>
                {pokemonData?.stats?.map((stat) => (
                    <tr key={stat.stat.name}>
                    <td>{stat.stat.name}</td>
                    <td>{stat.base_stat}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        : <div></div>
        }
    </div>
)
}

export default PokemonDetails