import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: {
    nextPage: 0,
    isLoading: false,
    pokelist: [],
  },
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.nextPage = action.payload.nextPage;
      state.pokelist = action.payload.pokelist;
    },
  },
});
// Un thunk sería una función que va a ejecutar una tarea y cunado lo termine va a dar lugar a una acción en nuestro reducer. Pues en este caso sería, cuando termine de hacer la petición da paso a "startLoadingPokemons, setPokemons ..."

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
