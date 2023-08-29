import { pokeApiCall } from "../../../api";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemonsApi = (page = 0) => {
  return async (dispatch, getState) => {
    //Previo a la petición
    //Cuando llamemos ejecutar getPokemos, tenemos que poner la acción de loading en true (definido en el store)
    dispatch(startLoadingPokemons());

    // // La petición
    // const resp = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    // );
    // const data = await resp.json();

    const { data } = await pokeApiCall.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );
    // const promises = data.results.map(async (pokes) => {
    //   const res = await fetch(pokes.url);
    //   const imgData = await res.json();
    //   return imgData;
    // });
    // const restImgs = await Promise.all(promises);
    // console.log(restImgs);

    // const pokeImgs = await pokeApiCall.get(`/pokemon/2`);
    // console.log(pokeImgs.data.sprites.front_default);
    dispatch(
      setPokemons({
        pokelist: data.results,
        nextPage: page + 1,
        prevPage: page - 1,
        // pokeImg: restImgs,
      })
    );
  };
};
