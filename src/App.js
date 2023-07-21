import { Route, Routes } from "react-router";
import "./App.css";
import Landingpage from "./components/Landingpage";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
