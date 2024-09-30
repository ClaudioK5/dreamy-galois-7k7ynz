import "./index.css";
import Window from "./components/Window.jsx";
import Popup from "./components/Popup.jsx";
import Popup2 from "./components/Popup2.jsx";
import { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  function togglePopup() {
    setIsOpen(!isOpen);
  }

  const [iSOpen, setISOpen] = useState(false);

  function togglePopup() {
    setIsOpen(!isOpen);
  }

  function togglepopup() {
    setISOpen(!iSOpen);
  }

  function handleItems() {
    setItems(...items, newItem);
  }

  return (
    <div className="container2">
      <div className="center-box2">
        <h2>Hello Customer</h2>
        <button2 onClick={togglepopup}>
          <strong>Your Items</strong>
        </button2>
      </div>
      <div className="center-box">
        <h1>Our Burgers and Combos</h1>
        <h2>Satisfy Your Hunger in Style!</h2>
        <div className="container">
          <Window
            onclick={togglePopup}
            img={
              "https://static.vecteezy.com/system/resources/previews/026/971/260/large_2x/hamburger-on-a-black-background-close-up-isolate-free-photo.jpg"
            }
            price={"13.99$"}
            title={"The Ultimate Classic"}
            description={
              "This juicy beef patty is topped with crisp latuce, fresh tomatoes, melted cheese, and our special sauce, all wrapped in a toasted bun. Perfect for satisfying your hunger any time of the day!"
            }
          />
          <Window
            onclick={togglePopup}
            img={
              "https://img.freepik.com/premium-photo/burger-with-chicken-vegetables-black-background-3d-rendering_890887-10754.jpg"
            }
            title={"Crispy Delight Burger"}
            price={"15.99$"}
            description={
              "Featuring a perfectly fried chicken fillet topped with crunchy lattuce, fresh pickles, and a hint of creamy mayo, all sandwiched between a soft sesame bun. A delightful mix of texture and flavor in every bite!"
            }
          />
          <Window
            onclick={togglePopup}
            img={
              "https://img.freepik.com/premium-photo/perfect-bacon-cheese-burger-with-beef-tomato-onion-fresh-lettuce-leaves-dark-background-ai_108146-4779.jpg"
            }
            price={"18.99$"}
            title={"BaconCheese Delight"}
            description={
              "This mouthwatering beef patty features juicy beef, cheddar cheese, crispy bacon strips, fresh lattuce and a soft golden bun. The rich texture of the bacon and melted cheese contrasts beautifully with the fresh ingredients."
            }
          />
          {isOpen && <Popup onclick={togglePopup} />}
          {iSOpen && <Popup2 onclic={togglepopup} items={items} />}
        </div>
      </div>
    </div>
  );
}
