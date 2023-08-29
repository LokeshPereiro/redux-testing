import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsApi } from "./store/slices/pokemon";

const PokeApp = () => {
  const { isLoading, pokelist, nextPage, prevPage } = useSelector(
    (state) => state.pokemons
  );

  const dispatch = useDispatch();

  // Primero 10 resultados
  useEffect(() => {
    dispatch(getPokemonsApi());
  }, []);
  // console.log(pokeImg.data.sprites.front_default);

  return (
    <div>
      <h1>
        <i>PokéAPI</i>
      </h1>
      <hr />
      {isLoading && (
        <div className="alert alert-danger">Loading Pokemons...</div>
      )}
      <ul>
        {pokelist.map((pokemons) => {
          return (
            <div key={pokemons.name}>
              <li>{pokemons.name}</li>
            </div>
          );
        })}
      </ul>
      <div className="d-flex justify-content-between">
        <button
          disabled={isLoading}
          className="btn btn-sm btn-secondary"
          disabled={prevPage === -1}
          onClick={() => dispatch(getPokemonsApi(prevPage))}
        >
          Prev
        </button>

        <button
          disabled={isLoading}
          className="btn btn-sm btn-primary"
          onClick={() => dispatch(getPokemonsApi(nextPage))}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PokeApp;
