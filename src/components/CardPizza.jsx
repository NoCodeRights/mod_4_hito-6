import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { formatNumber } from "../scripts";

export const CardPizza = ({ name, price, ingredients, img, desc }) => {
  return (
    <div>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <hr />
          <div className="d-flex justify-content-center fs-6">
            <Card.Text>{desc}</Card.Text>
            <hr />
          </div>
          <div className="d-flex justify-content-center fs-6">
            <Card.Text><strong>Ingredientes</strong></Card.Text>
            <hr />
            <hr />
            <hr />
          </div>
          🍕
          <ul className="list-group list-group-flush">
            {ingredients?.map((ingredients, id) => (
              <li key={id} className="list-group-item text-center">
                {ingredients}
              </li>
            ))}
          </ul>
          <hr />
          <div className="d-flex justify-content-center">
            <strong>Precio: ${formatNumber(price)}</strong>
          </div>
          <div className="d-flex justify-content-between p-3">
            <Button className="border" variant="light">
              Ver más 👀
            </Button>
            <Button variant="dark">Añadir 🛒</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardPizza;
