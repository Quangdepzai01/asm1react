import React from "react";
import ColFooter from "./ColFooter";
import styles from "./Footer.module.css";
import SubscribeForm from "./SubscribeForm/SubscribeForm";

function Footer() {
  const initItems = [
    {
      col_number: 1,
      col_values: [
        "Countries",
        "Regions",
        "Cities",
        "Districts",
        "Airports",
        "Hotels"
      ]
    },
    {
      col_number: 2,
      col_values: [
        "Homes",
        "Apartments",
        "Resorts",
        "Villas",
        "Hostels",
        "Guest houses"
      ]
    },
    {
      col_number: 3,
      col_values: [
        "Unique places to stay",
        "Reviews",
        "Unpacked: Travel articles",
        "Travel communities",
        "Seasonal and holiday deals"
      ]
    },
    {
      col_number: 4,
      col_values: [
        "Car rental",
        "Flight Finder",
        "Restaurant reservations",
        "Travel Agents"
      ]
    },
    {
      col_number: 5,
      col_values: [
        "Curtomer Service",
        "Partner Help",
        "Careers",
        "Sustainability",
        "Press center",
        "Safety Resource Center",
        "Investor relations",
        "Terms & conditions"
      ]
    }
  ];

  return (
    <React.Fragment>
      <SubscribeForm />
      <footer className={`row p-4 ${styles.footer}`}>
        {/* //liet ke cac item */}
        {initItems.map((item, index) => (
          <ColFooter item={item.col_values} key={index} />
        ))}
      </footer>
    </React.Fragment>
  );
}

export default Footer;
