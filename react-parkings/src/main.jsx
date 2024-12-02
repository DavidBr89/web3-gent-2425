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
import AuthContextProvider from "./contexts/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import RootLayout from "./layouts/RootLayout.jsx";

const queryClient = new QueryClient();

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <AddParkingsFormikPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "users",
        element: (
          <ProtectedRoute>
            {/* <AdminProtectedRoute> */}
            <UsersPage />
            {/* </AdminProtectedRoute> */}
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <AuthContextProvider> */}
      <RouterProvider router={browserRouter} />
      {/* <ParkingsListPage /> */}
      {/* <ParkingsMapPage /> */}
      {/* <AddParkingsPage /> */}
      {/* <AddParkingsFormikPage /> */}
      {/* </AuthContextProvider> */}
    </QueryClientProvider>
  </StrictMode>
);
