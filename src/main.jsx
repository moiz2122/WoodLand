import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Shop from "./Pages/Shop.jsx";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { DataProviderComponent } from "./Context.jsx";
console.log(window.scrollY);
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DataProviderComponent>
        <App />
      </DataProviderComponent>
    ),
  },
  {
    path: "/shop",
    element: (
      <DataProviderComponent>
        <Shop />
      </DataProviderComponent>
    ),
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
