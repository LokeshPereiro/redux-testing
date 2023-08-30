import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: {
    nextPage: 0,
    prevPage: 0,
    isLoading: false,
    pokelist: [],
  },
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.pokelist = action.payload.pokelist;
      state.nextPage = action.payload.nextPage;
      state.prevPage = action.payload.prevPage;
      state.pokeImg = action.payload;
    },
  },
});
//Una vez que el thunk termine de realizar las peticiones y obtenr los datos, entoces sí, se ejecutan los reducers definidos
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
