import React from "react";
import ItemCards from "./ItemCards";
import products from "../../src/products";
import "./../index.css";

export default function Maincontent() {
  return (
    <div>
      {products.map((product) => (
        <ItemCards
          key={product.id}
          imageSrc={product.imageSrc}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}
