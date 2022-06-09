import React from "react";
import minus from "../../assets/buttons/minus.png";
import plus from "../../assets/buttons/plus.png";
import styles from "./ExpandedItem.module.css";

function ExpandedItem(props) {
  return (
    <div className={styles.expandedContainer}>
      <img src={minus} alt="volume_down" className={styles.iconContainer} />
      <div className={styles.imageContainer}>
        <img
          src={props.image}
          alt="station_icon"
          className={styles.faviconContainer}
          onError={(e) => {
            e.target.src =
              "https://static-01.daraz.com.bd/p/516013f044b7676deeadb14955f3aa54.jpg";
          }}
        />
      </div>
      <img src={plus} alt="volume_up" className={styles.iconContainer} />
    </div>
  );
}

export default ExpandedItem;
