import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ParkingsListPage from "./pages/ParkingsListPage.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ParkingsMapPage from "./pages/ParkingsMapPage.jsx";
import AddParkingsPage from "./pages/AddParkingsPage.jsx";
import AddParkingsFormikPage from "./pages/AddParkingsFormikPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UsersPage from "./pages/UsersPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

const queryClient = new QueryClient();

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <AddParkingsFormikPage />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={browserRouter} />
      {/* <ParkingsListPage /> */}
      {/* <ParkingsMapPage /> */}
      {/* <AddParkingsPage /> */}
      {/* <AddParkingsFormikPage /> */}
    </QueryClientProvider>
  </StrictMode>
);
