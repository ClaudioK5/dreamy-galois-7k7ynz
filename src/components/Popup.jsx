export default function Popup({ onclick }) {
  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Your Burger Order</h2>
        <p>Your burger is being added to the cart!</p>
        <button onClick={onclick}>Close</button>
      </div>
      <div className="blur-background" onClick={onclick}></div>
    </div>
  );
}
