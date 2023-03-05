// import { createStore } from 'redux';

import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from './pokemonSlice';

// const store = createStore(rootReducer);
const store = configureStore({
    reducer: {
        pokemon: pokemonReducer
    }
});

export default store;
