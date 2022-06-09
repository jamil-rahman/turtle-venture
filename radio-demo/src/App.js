import styles from "./App.module.css";
import Radioplayer from "./views/RadioPlayer/Radioplayer";
import React from "react";

function App() {
  return (
    <div className={styles.appHeader}>
      <Radioplayer />
    </div>
  );
}

export default App;
