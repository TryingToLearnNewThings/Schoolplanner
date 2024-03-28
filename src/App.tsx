import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Datum from "./components/MainPage/Datum";
import MainPage from "./pages/MainPage";
import HAedit from "./pages/HA-Edit";
import STedit from "./pages/ST-Edit";
import TEedit from "./pages/TE-Edit";
import "./App.css";

const App: React.FC = () => {
  const formatTime = (date: Date) => date.toLocaleTimeString();
  return (
    <Router>
      <div className="">
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
