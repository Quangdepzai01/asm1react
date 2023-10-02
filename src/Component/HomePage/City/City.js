import React from "react";
import styles from "./City.module.css";
//danh sach cac city
const initCity = [
  {
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
];

function City() {
  const link = "#";

  return (
    <section className="pt-4">
      <div className="row gx-4 py-4">
        {initCity.map((city, index) => (
          <div className="col-4" key={index}>
            <div className={styles.cityForm}>
              <img
                className={styles.img}
                src={`${city.image}`}
                alt={`${city.name}`}
              />

              <h1 className={styles.cityName}>
                <a href={link}>{city.name}</a>
              </h1>
              <h3 className={styles.citySubText}>{city.subText}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default City;
