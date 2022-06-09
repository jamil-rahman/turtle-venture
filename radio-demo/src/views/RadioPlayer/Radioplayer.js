import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import RadioList from "../../components/RadioList/RadioList";
import styles from "./RadioPlayer.module.css";

function Radioplayer() {
  return (
    <div className={styles.container}>
      <Navbar />
      <RadioList />
      <Footer />
    </div>
  );
}

export default Radioplayer;
