import MainPage from "./pages/MainPage";
import "./App.css";
import Datum from "./components/MainPage/Datum";

const App: React.FC = () => {
  const formatTime = (date: Date) => date.toLocaleTimeString();
  return (
    <div className="md:w-[100vw] md:h-[100vh]">
      <Datum format={formatTime} ticking={true} />
      <MainPage />
    </div>
  );
};

export default App;
