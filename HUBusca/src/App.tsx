import * as A from "./App.js";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <A.App>
        <A.Title>HUBusca</A.Title>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </A.App>
    </>
  );
}

export default App;
