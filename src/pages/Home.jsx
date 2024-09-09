import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

function Home() {
  const [pizzas, setPizzas] = useState([])
  const getPizzas = async () =>{
    const respuesta =await fetch('http://localhost:5000/api/pizzas')
    const pizzas = await respuesta.json()
    setPizzas(pizzas)
  }

useEffect(()=>{
  getPizzas()
},[])

  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center gap-3 mt-3 mb-3">
        {pizzas.map((e,index) => (
          <CardPizza
            key={index}
            img={e.img}
            name={e.name}
            desc={e.desc}
            price={e.price}
            ingredients={e.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;