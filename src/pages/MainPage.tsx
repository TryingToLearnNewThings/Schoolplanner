import Hausaufgaben from "../components/MainPage/Hausaufgaben";
import Schulstunde from "../components/MainPage/Schulstunden";
import Termine from "../components/MainPage/Termine";
// import Datum from "../components/MainPage/Datum";

function MainPage() {
  return (
    <div className="flex flex-row">
      <Hausaufgaben />
      <Schulstunde />
      <Termine />
      {/* <Datum /> */}
    </div>
  );
}

export default MainPage;
