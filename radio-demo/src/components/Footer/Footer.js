import styles from "./Footer.module.css";
import React from "react";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <span className={styles.nowPlaying}>NOW PLAYING</span>
        <span className={styles.stationName}>A2Z Radio</span>
      </div>
    </div>
  );
}

export default Footer;
