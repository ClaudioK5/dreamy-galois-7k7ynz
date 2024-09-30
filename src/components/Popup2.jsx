export default function Popup({ onclic, items }) {
  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Your Items</h2>
        {items.length > 0 ? (
          items.map((item, index) => <p key={index}>{item}</p>)
        ) : (
          <p>No items yet.</p>
        )}
        <button>Confirm the order</button>
        <button onClick={onclic}>Close</button>
      </div>
      <div className="blur-background" onClick={onclic}></div>
    </div>
  );
}
