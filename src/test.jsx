// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import cls from './components/pokemon.module.css'
// import PokemonDetails from './components/pokemonDetails'
// import PokemonItem from './components/pokemonItem';
// import { fetchInitPokemonData, fetchMorePokemonData, setSelectedPokemon } from './redux/pokemonSlice'

// const PokemonContainer = () => {

// const [selectedPokemonUrl, setSelectedPokemonUrl] = useState(null);
// const dispatch = useDispatch();

// const pokemonData = useSelector((state) => state.pokemon.pokemonData);
// const currentPage = useSelector((state) => state.pokemon.currentPage);
// const status = useSelector((state) => state.pokemon.status);
// const error = useSelector((state) => state.pokemon.error);

// const s = useSelector((state) => state.pokemon);
// console.log(s);

// // useEffect(() => {
// //   dispatch(fetchMorePokemonData(currentPage));
// // }, [dispatch]);

// useEffect(() => {
//   dispatch(fetchInitPokemonData());
// }, [dispatch]);

// const handleLoadMore = () => {
//   dispatch(fetchMorePokemonData(currentPage));
// };

// if (status === 'loading') {
//   return <div>Loading...</div>;
// }

// if (status === 'failed') {
//   return <div>{error}</div>;
// }





//   const handlePokemonClick = (url) => {
//     setSelectedPokemonUrl(url);
//   }

//   return (
//     <>
//       <header className="App-header">
//         Pokemon
//       </header>
//       <main className={cls.PokemonContainer}>
//         <div className={cls.Pokemons}>
//           {
//             pokemonData?.map((pokemon, index) => (
//               <PokemonItem key={pokemon.name + index} url={pokemon.url} onClick={() => handlePokemonClick(pokemon.url)} />
//             ))
//           }
//         </div>

//         {/* {selectedPokemonUrl && <PokemonDetails url={selectedPokemonUrl} />} */}
//         <PokemonDetails url={selectedPokemonUrl} />
//       </main>
//       <footer>
//         <button onClick={handleLoadMore}>Load more</button>
//       </footer>
//     </>
//   )
// }


// // const PokemonItem = ({ url }) => {
// //   const [pokemonData, setPokemonData] = useState(null);
// //   const dispatch = useDispatch();
// //   const titleName = pokemonData?.name?.charAt(0)?.toUpperCase() + pokemonData?.name?.slice(1);


// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const response = await fetch(url);
// //       const data = await response.json();
// //       setPokemonData(data);
// //     };
// //     fetchData();
// //   }, [url]);

// //   const handleClick = () => {
// //     dispatch(setSelectedPokemon(pokemonData));
// //   }

// //   return (
// //     <div>
// //       {pokemonData ? (
// //         <div className={cls.PokemonItem} onClick={handleClick}>
// //           <h2>{titleName}</h2>
// //           <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
// //           <PokemonType types={pokemonData.types} />

// //         </div>
// //       ) : (
// //         <p>Loading...</p>
// //       )}
// //     </div>
// //   );
// // };

// // const PokemonType = ({types}) => {

// //   return (
// //       <div className={cls.PokemonType}>
// //           {
// //               types.map(({type}, index) => {
// //                   const typeName = type.name.charAt(0).toUpperCase() + type.name.slice(1);

// //                   return <span key={type.name + '_' + index}>{typeName}</span>
// //               })
// //           }
// //       </div>
// //   )
// // }


// export default PokemonContainer;