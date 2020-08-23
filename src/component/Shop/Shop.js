import React, { useState } from "react";
import fakeData from "../../fakeData";

const Shop = () => {
  console.log(fakeData);
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  return (
    <div>
      <h1>this is shop</h1>
      <h3>https://ema-john.firebaseapp.com/</h3>
      <ol>
        {products.map((product) => (
          <li>{product.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default Shop;
