import * as A from "./App.js";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Historico from "./pages/Historico.js";

function App() {
  return (
    <>
      <A.App>
        <A.Title>HUBusca</A.Title>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil/:userName" element={<Perfil />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </A.App>
    </>
  );
}

export default App;
