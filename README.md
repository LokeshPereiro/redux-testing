# ¿Qué es Redux?

Es un contenedor predecible del estado de nuestra aplicación, es decir, es una forma de controlar dónde se encuentra la información de mi aplicación en todo momento. Además ayuda a que la modificación de la información siempre sea en una sola vía (de manera predecible) con el objetivo de prevenir cambios accidentales en la misma.

## Características

- Store: Es ahí donde se encuentra almacenada la información que mis componentes consumirán, es decir, el <b>current state</b>
- View: Consume la información disponible en el store pero si necesita modificar alguna información dispara una nueva acción..
- Actions: Se definen las acciones a implementar. Dichas acciones no se envían directamente al store, sino que, las recibe un <b>Dispatcher</b> que analiza los datos recibidos y los califica según si es una acción síncrona o asíncrona.
  - Síncrona: La acción es enviada directamente al reducer principal que dentro tiene otros reducers pequeños que realizan unas acciones determinadas.
  - Asíncrona: Primero es trata con los <b>middlewares</b>, una vez terminada las peticiones o tareas asíncronas, entonces es enviada al reducer principal.

Cuando todo el ciclo se haya terminado bien y tengamos un nuevo estado, entonces, el State del "store" notifica a la vista de los resultados.

## Redux, React Redux, Redux Toolkit, RTK Query

- <u>Redux</u>: Es un patrón que se basa en crear nuevos estados a través de reducers. <b>[ Predictable - Centralized - Debuggable - Flexible ]</b>
- <u>React Redux</u>: Era la forma tradicional de trabajar con Redux dentro de las aplicaciones hechas con React. El único inconveniente es que tenemos que escibir algo de código para consumir sus componentes. Ex. useSelector(leer, usar los reducers del store), useDispatch(ejecutar las acciones definidas en los reducers), Provider(store), etc.
- <u>Redux Toolkit</u>: Se trata de una serie de herramientas que nos ayudan a implementar el patrón Redux en nuestra app de manera muy sencilla.
  - <b>RTK Query</b>: Es una de las herramientas del Redux Toolkit que está especialmente diseñado para la obtención, la carga y el alamacenamiento de datos en caché. Es decir, gracias a la herramienta RTK Query las peticiones http se manejan de manera bastante sencilla, efectiva y optimizada.
    - Seguimiento del estado de la carga de los datos para mostrar los spinners
    - Evitar solicitudes duplicadas de los mismos datos
    - Actualizaciones optimizadas que dan sensaciones de una carga rápida
    - "Managing cache lifetimes as the user interacts with the UI"

```javascript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
    }),
    getTodoById: builder.query({
      query: (todoId) => `/todos/${todoId}`,
    }),
  }),
});

export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;
```

<i>Thunks</i>: Es una acción asíncrona que dispara otra acción (dentro del reducer correspondiente) cuando se resuelve una petición asíncrona.
