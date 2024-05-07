import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Datum from "./components/MainPage/Datum";
import "./App.css"; 

const App: React.FC = () => {
  const formatTime = (date: Date) => date.toLocaleTimeString();
  return (
    <>
      <div className="">
        <Datum format={formatTime} ticking={true} />
        <Outlet/>
        <NavBar />
      </div>
    </>
  );
};

export default App;
