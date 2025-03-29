import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./pages/home/Home";
import HellsVanity from "./pages/hellsvanity/HellsVanity";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/hellsvanity" element={<HellsVanity />} /> */}
        {/* <Route path="/vanity-home" element={<VanityHome />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testing" element={<TestImage />} /> */}
        <Route path="/hellsvanity" element={<HellsVanity />} />
        {/* <Route path="/hells" element={<Hells />} />
        <Route path="/leslispa" element={<LesliSpa />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
