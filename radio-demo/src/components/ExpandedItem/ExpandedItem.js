import React from "react";
import minus from "../../assets/buttons/minus.png";
import plus from "../../assets/buttons/plus.png";
import styles from "./ExpandedItem.module.css";
import PropTypes from "prop-types";

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
              "https://png.pngtree.com/png-vector/20190420/ourlarge/pngtree-vector-radio-icon-png-image_965380.jpg";
          }}
        />
      </div>
      <img src={plus} alt="volume_up" className={styles.iconContainer} />
    </div>
  );
}

ExpandedItem.propTypes = {
  image: PropTypes.string,
};
export default ExpandedItem;
