import React from "react";
import styles from "./Footer.module.css"
// cac cot item
function ColFooter(props) {
  const link = "#";
  return (
    <div className="col">
      <ul>
        {props.item.map((item, index) => (
          <li key={index}><a className={styles.af} href={link}>{item}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default ColFooter;
