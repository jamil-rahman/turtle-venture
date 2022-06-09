import React, { useState } from "react";
import styles from "./ListItem.module.css";
import ExpandedItem from "../ExpandedItem/ExpandedItem";

function ListItem(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.listContainer}>
      <div className={styles.itemContainer}>
       
        {isOpen && <ExpandedItem image={props.image} />}
        <div onClick={() => setIsOpen(!isOpen)}>
          <span className={styles.stationName}>{props.name}</span>
          <span className={styles.stationFM}>{props.radio} FM</span>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
