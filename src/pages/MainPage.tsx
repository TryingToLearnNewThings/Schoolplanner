import Hausaufgaben from "../components/MainPage/Hausaufgaben";
import Schulstunde from "../components/MainPage/Schulstunden";
import Termine from "../components/MainPage/Termine";

function MainPage() {
  return (
    <div className="flex flex-col md:flex-row">
      <Hausaufgaben />
      <Schulstunde />
      <Termine />
    </div>
  );
}

export default MainPage;
