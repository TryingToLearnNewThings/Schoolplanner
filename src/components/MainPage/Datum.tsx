import { getCurrentDate } from "../../utils/Currentdate";
import Clock from "react-live-clock";

function Datum() {
  return (
    <div className="wrapper">
      <div className="Day">Today</div>
      <div className="Time-Date">
        <div className="Time">
          {/* <Clock format="HH:mm:ss" interval={1000} ticking={true} /> */}
        </div>
        <div className="Date">{getCurrentDate()}</div>
      </div>
    </div>
  );
}

export default Datum;
