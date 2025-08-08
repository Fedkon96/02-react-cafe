import css from "./FlightInfo.module.css";
import { FaHelicopter } from "react-icons/fa";

const FlightInfo = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        AirMood – Flight Tracker <FaHelicopter />
      </h1>
      <p>How was your last flight experience? Let us know!</p>
    </div>
  );
};

export default FlightInfo;
