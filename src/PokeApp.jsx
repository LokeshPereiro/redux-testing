import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsApi } from "./store/slices/pokemon";

const PokeApp = () => {
  const { isLoading, pokelist, nextPage } = useSelector(
    (state) => state.pokemons
  );
  const dispatch = useDispatch();

  // Primero 10 resultados
  useEffect(() => {
    dispatch(getPokemonsApi());
  }, []);
  return (
    <div>
      <h1>
        <i>PokéAPI</i>
      </h1>
      <hr />
      {isLoading ? (
        <div className="alert alert-danger">Loading Pokemons...</div>
      ) : null}
      <ul>
        {pokelist.map((pokemons) => {
          return <li key={pokemons.name}>{pokemons.name}</li>;
        })}
      </ul>
      <button
        disabled={isLoading}
        className="btn btn-primary"
        onClick={() => dispatch(getPokemonsApi(nextPage))}
      >
        Next
      </button>
    </div>
  );
};

export default PokeApp;
