import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/Home/HomePage";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<HomePage />} />

        {/* Aquí después agregás otras páginas como /login, /ferinhas, etc */}
      </Routes>
    </Router>
  );
}
