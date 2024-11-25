import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ParkingsListPage from "./pages/ParkingsListPage.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ParkingsMapPage from "./pages/ParkingsMapPage.jsx";
import AddParkingsPage from "./pages/AddParkingsPage.jsx";
import AddParkingsFormikPage from "./pages/AddParkingsFormikPage.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <ParkingsListPage /> */}
      {/* <ParkingsMapPage /> */}
      {/* <AddParkingsPage /> */}
      <AddParkingsFormikPage />
    </QueryClientProvider>
  </StrictMode>
);
