import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import { Welcome } from "./pages/Login"

export const App = () => {
  return (
    <>
      <Welcome />
      <BrowserRouter>
        <main>
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
