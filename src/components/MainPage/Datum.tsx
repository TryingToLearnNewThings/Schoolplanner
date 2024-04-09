import { FC, PropsWithChildren, useEffect, useState } from "react";
import { getCurrentDate } from "../../utils/TimeDisplay/Currentdate";
interface Props {
  format: (date: Date) => string;
  interval?: number;
  ticking?: boolean;
}

const Datum: FC<PropsWithChildren<Props>> = (props) => {
  const { format, interval, ticking } = props;
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    if (ticking) {
      const timer = setInterval(() => setTime(new Date()), interval);
      return () => clearInterval(timer);
    }
  }, [interval, ticking]);

  return (
    <div className="w-28 h-20 m-4 flex flex-col text-center bg-custom-primary p-4 rounded shadow-md mb-5">
      <div className="text-lg font-bold">{format(time)}</div>
      <hr />
      <div>{getCurrentDate()}</div>
    </div>
  );
};

export default Datum;
