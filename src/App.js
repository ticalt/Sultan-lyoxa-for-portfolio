import { Route, Routes } from "react-router-dom";
import { CardPage } from "./pages/CardPage/CardPage";
import { Home } from "./pages/Home/Home";
import { KatalogPage } from "./pages/KatalogPage/KatalogPage";
import { Korzina } from "./pages/Korzina/Korzina";

function App() {
  return (
    <div className="App">
      
      <Routes>
          <Route  path='/' element={<Home />} />
          <Route path="cardpage" element={<CardPage />} />
          <Route path="katalog" element={<KatalogPage />} />
          <Route path="korzina" element={<Korzina />} />
      </Routes>
    </div>
  );
}

export default App;
