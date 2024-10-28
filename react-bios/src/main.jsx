import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DarkModeContextProvider from "./contexts/DarkModeContext.jsx";
import Movies from "./components/Movies.jsx";

import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import MoviesPage from "./pages/MoviesPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";

// ROUTER

// STAP 1: Nieuwe browserRouter aanmaken

const browserRouter = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <MoviesPage />,
      },
      {
        path: "details",
        // Lokale foutpagina -> enkel voor het details pagina
        errorElement: <NotFoundPage />,
        children: [
          {
            path: "test",
            element: <App />,
          },
          {
            path: ":id",
            element: <DetailsPage />,
          },
        ],
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
    ],
  },
]);

// Oude manier ->

{
  /* <Routes>
  <Route element={<App />} path="/" />

</Routes> */
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeContextProvider>
      {/* <Header /> */}
      <RouterProvider router={browserRouter} />
      {/* <App /> */}
      {/* <Movies /> */}
      {/* <Footer /> */}
    </DarkModeContextProvider>
  </StrictMode>
);
