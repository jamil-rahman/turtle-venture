import styles from "./Navbar.module.css";
import switch_button from "../../assets/buttons/switch.png";
import backArrow from "../../assets/buttons/back-arrow.png";
import React from "react";

function Navbar() {
  return (
    <div className={styles.container}>
      <ul>
        <li className={styles.icon}>
          <a href="#back">
            <img src={backArrow} alt="back-arrow" />
          </a>
        </li>
        <li className={styles.icon}>
          <a href="#news">
            <span className={styles.header}>STATIONS</span>
          </a>
        </li>
        <li className={styles.icon}>
          <a href="#turn_off">
            <img src={switch_button} alt="back-arrow" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
