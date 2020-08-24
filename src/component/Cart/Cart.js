import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  let total = 0;
  let shipping = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    shipping = shipping + product.shipping;
    total = total + product.price;
  }
  const grandTotal = total + shipping;
  const tex = grandTotal / 10;
  const orderTotal = grandTotal + tex;
  return (
    <div>
      <h3>Order Summary</h3>
      <h5>Items Order:$ {cart.length}</h5>
      <p>
        <small>Items Price:$ {Number(total.toFixed(2))} </small>
      </p>
      <p>
        <small>Shipping & Handling:$ {Number(shipping.toFixed(2))} </small>
      </p>
      <p>
        <small>Total before tax:$ {Number(grandTotal).toFixed(2)} </small>
      </p>
      <p>
        <small>Estimated Tax:$ {Number(tex).toFixed(2)}</small>
      </p>
      <h4>Order Total:$ {Number(orderTotal).toFixed(2)} </h4>
    </div>
  );
};

export default Cart;
