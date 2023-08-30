import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  //Nombre del 'reducer'
  reducerPath: "todos",
  //La url base
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  // Mis distintos endpoints teniendo en cuenta la baseURL
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
    }),
    getTodoById: builder.query({
      query: (todoId) => `/todos/${todoId}`,
    }),
  }),
});
// Automaticamente createApi me crea custom hooks a partir de nuestros metodos definidos para los endpoints
export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;
