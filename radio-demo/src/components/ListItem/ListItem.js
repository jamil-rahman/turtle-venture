import React, { useState } from "react";
import styles from "./ListItem.module.css";
import ExpandedItem from "../ExpandedItem/ExpandedItem";
import PropTypes from "prop-types";

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

ListItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  radio: PropTypes.string,
};
export default ListItem;
