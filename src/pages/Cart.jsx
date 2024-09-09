import React, { useState } from "react";
import pizzas from "../pizzas";
import { formatNumber } from "../scripts";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (pizza) => {
    const existingItem = cartItems.find((item) => item.id === pizza.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...pizza, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (pizzaId) => {
    const existingItem = cartItems.find((item) => item.id === pizzaId);
    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== pizzaId));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === pizzaId ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container">
      <div>
        {pizzas.map((pizza) => (
          <div key={pizza.id}>
            <img src={pizza.img} alt={pizza.name} />
            <div>
              <h3>{pizza.name}</h3>
              <p>{pizza.desc}</p>
              <ul>
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <p className="pizza-price">${formatNumber(pizza.price)} </p>
              <button className="add-to-cart" onClick={() => addToCart(pizza)}>
                Añadir 🛒
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2>Tu Carrito</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((pizza) => (
              <li key={pizza.id}>
                <img src={pizza.img} alt={pizza.name} />
                <div>
                  <span>
                    {pizza.name} (x{pizza.quantity})
                  </span>
                  <span>{pizza.price * pizza.quantity}</span>
                  <div>
                    <button onClick={() => decreaseQuantity(pizza.id)}>-</button>
                    <button onClick={() => addToCart(pizza)}>+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${formatNumber(calculateTotal())}</h3>
          <button>Pagar</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
