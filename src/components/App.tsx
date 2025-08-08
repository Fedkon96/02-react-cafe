// import css from "../index.css";
import FlightInfo from "./FlightInfo/FlightInfo";
import Product from "./Product";
import MessageFeedback from "./MessageFeedback/MessageFeedback";

export default function App() {
  return (
    <>
      <h1>Best selling</h1>
      <FlightInfo />
      <MessageFeedback />
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />
    </>
  );
}
