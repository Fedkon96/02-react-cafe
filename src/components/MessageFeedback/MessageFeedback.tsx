import css from "./MessageFeedback.module.css";
import { useState } from "react";

const eventClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  console.log(event);
};

export default function MessageFeedback() {
  const [click, setClick] = useState(0);
  setClick(click + 1);

  return (
    <div>
      <ul>
        <li>
          <button onClick={eventClick}>Smooth Landing {click}</button>
        </li>
        <li>
          <button>Just Okay</button>
        </li>
        <li>
          <button>Turbulent Ride</button>
        </li>
        <li>
          <button>Clear Feedback</button>
        </li>
      </ul>
    </div>
  );
}
