import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchInitPokemonData = createAsyncThunk(
  'pokemon/fetchInitPokemonData',
  async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=12`);
    const data = await response.json();
    return data.results;
  }
);

export const fetchMorePokemonData = createAsyncThunk(
  'pokemon/fetchMorePokemonData',
  async (currentPage) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${(currentPage - 1) * 12}&limit=12`);
    const data = await response.json();
    return data.results;
  }
);

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemonData: [],
    currentPage: 12,
    selectedPokemon: {},
    status: '',
    error: null
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSelectedPokemon: (state, action) => {
      state.selectedPokemon = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitPokemonData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchInitPokemonData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pokemonData = action.payload;
      })
      .addCase(fetchInitPokemonData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchMorePokemonData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMorePokemonData.fulfilled, (state, action) => {
        state.status = 'succeeded';

        state.pokemonData = state.pokemonData.concat(action.payload);
        state.currentPage += 1;
      })
      .addCase(fetchMorePokemonData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setCurrentPage, setSelectedPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;












// import { createSlice } from '@reduxjs/toolkit'

// export const pokemonSlice = createSlice({
//   name: 'pokemon',
//   initialState: {
//     pokemonData: [], // make sure the property is initialized as an empty array
//     currentPage: 1
//   },
//   reducers: {
//     initData: async (state) => {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=12`);
//         const data = await response.json();

//         state.pokemonData = data.results
//     },
//     loadMore: async  (state) => {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${(state.currentPage - 1) * 12}&limit=12`);
//         const data = await response.json();

//         state.pokemonData = [...state.pokemonData, ...data.results]
//     }
//   },
// })

// export const { initData, loadMore } = pokemonSlice.actions

// export default pokemonSlice.reducer



















// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// // export const fetchInitPokemonData = createAsyncThunk(
// //   'pokemon/fetchInitPokemonData',
// //   async () => {
// //     const init = async () => {const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=12`);
// //     const data = await response.json();
// //     return data.results;}
// //     await init();
// //   }
// // );


// export const fetchInitPokemonData = createAsyncThunk(
//     'pokemon/fetchInitPokemonData',
//     async () => {
//       try {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=12`);
//         const data = await response.json();
//         return data.results;
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   );

// export const fetchMorePokemonData = createAsyncThunk(
//   'pokemon/fetchMorePokemonData',
//   async (currentPage) => {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${(currentPage - 1) * 12}&limit=12`);
//     const data = await response.json();
//     return data.results;
//   }
// );

// export const pokemonSlice = createSlice({
//   name: 'pokemon',
//   initialState: {
//     pokemonData: [],
//     currentPage: 1,
//     status: 'idle',
//     error: null
//   },
//   reducers: {
//     setCurrentPage: (state, action) => {
//       state.currentPage = action.payload;
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchInitPokemonData.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchInitPokemonData.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.pokemonData = action.payload;
//       })
//       .addCase(fetchInitPokemonData.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(fetchMorePokemonData.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchMorePokemonData.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.pokemonData = [...state.pokemonData, ...action.payload];
//       })
//       .addCase(fetchMorePokemonData.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   }
// });

// export const { setCurrentPage } = pokemonSlice.actions;

// export default pokemonSlice.reducer;


















// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// export const fetchPokemonData = createAsyncThunk(
//     'pokemon/fetchData',
//     async (currentPage) => {
//       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${(currentPage - 1) * 12}&limit=12`);
//       const data = await response.json();
//       return data.results;
//     }
//   );

// export const pokemonSlice = createSlice({
//   name: 'pokemon',
//   initialState: {
//     pokemonData: [],
//     currentPage: 1
//   },
//   reducers: {
//     // initData: async (state) => {
//     //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=12`);
//     //     const data = await response.json();

//     //     state.pokemonData = data.results
//     // },
//     // loadMore: async (state) => {
//     //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${(state.currentPage - 1) * 12}&limit=12`);
//     //     const data = await response.json();

//     //     state.pokemonData = [...state.pokemonData, ...data.results]
//     // }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPokemonData.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchPokemonData.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.pokemonData = [...state.pokemonData, ...action.payload];
//       })
//       .addCase(fetchPokemonData.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   }
// })

// export const { initData, loadMore } = pokemonSlice.actions

// export default pokemonSlice.reducer




// import { createSlice } from '@reduxjs/toolkit'

// export const pokemonSlice = createSlice({
//   name: 'pokemon',
//   initialState: {
//     pokemonData: [],
//     currentPage: 1
//   },
//   reducers: {
//     initData: async (state) => {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=12`);
//         const data = await response.json();

//         state.pokemonData = data.results
//     },
//     loadMore: async (state) => {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${(state.currentPage - 1) * 12}&limit=12`);
//         const data = await response.json();

//         state.pokemonData = [...state.pokemonData, ...data.results]
//     }
//   },
// })

// export const { initData, loadMore } = pokemonSlice.actions

// export default pokemonSlice.reducer




