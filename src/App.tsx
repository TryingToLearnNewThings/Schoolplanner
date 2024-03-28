import MainPage from "./pages/MainPage";
import HAedit from "./pages/HA-Edit";
import STedit from "./pages/ST-Edit";
import TEedit from "./pages/TE-Edit";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Datum from "./components/MainPage/Datum";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  const formatTime = (date: Date) => date.toLocaleTimeString();
  return (
    <Router>
      <div className="md:w-[100vw] md:h-[100vh]">
        <Datum format={formatTime} ticking={true} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ha-edit" element={<HAedit />} />
          <Route path="/st-edit" element={<STedit />} />
          <Route path="/te-edit" element={<TEedit />} />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
};

export default App;
