import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contador from "./pages/Contador";
import ListaUsuarios from "./pages/Usuarios";

function App() {
  return (
    <>
      <div>
        <h1>ola, react com vite</h1>
      </div>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | <Link to="/contador">Contador</Link> | <Link to="/usuarios">Usuários</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contador" element={<Contador />} />
          <Route path="/usuarios" element={<ListaUsuarios />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;