import axios from "axios";

export const pokeApiCall = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});
