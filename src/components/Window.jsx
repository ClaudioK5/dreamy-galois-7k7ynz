import { useState } from "react";

export default function Window({ img, title, price, description, onclick }) {
  return (
    <div className="small-box">
      <img src={img} />
      <div className="price-box">
        <p>{price}</p>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={onclick}>Buy</button>
    </div>
  );
}
