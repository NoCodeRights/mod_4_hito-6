import React, { useEffect } from "react";
import { useState } from "react";
import CardPizza from "../components/CardPizza";

function Pizza() {
  const [pizza, setPizza] = useState({});
  const getPizza = async () => {
    const res = await fetch("http://localhost:5000/api/pizzas/p001");
    const pizza = await res.json();
    setPizza(pizza);
  };

  useEffect(() => {
    getPizza();
  }, []);


  return(
    <CardPizza
            key={pizza.id}
            img={pizza.img}
            name={pizza.name}
            desc={pizza.desc}
            price={pizza.price}
            ingredients={pizza.ingredients}
    />
  )
  
  
}

export default Pizza;
