import Type from "./Type";
import React from "react";
// import styles from "./TypeHotels.module.css";

const initTypes = [
  {
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp",
  },
  {
    name: "Apartments",
    count: 2331,
    image: "./images/type_2.jpg",
  },
  {
    name: "Resorts",
    count: 2331,
    image: "./images/type_3.jpg",
  },
  {
    name: "Villas",
    count: 2331,
    image: "./images/type_4.jpg",
  },
  {
    name: "Cabins",
    count: 2331,
    image: "./images/type_5.jpg",
  },
];

function TypeHotels() {
  return (
    <section className="pt-4">
      <h2 className="mb-3 fw-bold">Browse by property type</h2>
      <div className="row g-5">
        {initTypes.map((type,index) => (
          <Type type={type} className="col" key={index}/>
        ))}
      </div>
    </section>
  );
}

export default TypeHotels;
