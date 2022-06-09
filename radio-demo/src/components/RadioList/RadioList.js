import styles from "./RadioList.module.css";
// import axios from "axios";
import React, { useEffect, useState } from "react";
import ListItem from "../ListItem/ListItem";

function RadioList() {

  const [stations, setStations] = useState([])


  const getData = async () =>{
    const res = await fetch("https://de1.api.radio-browser.info/json/stations/bycountry/bangladesh?limit=20",{
      method: 'GET'
    });
    const data = await res.json();
    console.log(data[5].favicon);
    setStations(data)
  }

  useEffect(() => {
    getData();
  }, []);

  function getRndInteger(min, max) {
    const value = (Math.random() * (max - min)) + min;
    return value.toFixed(1);
  }

  return (
    <div className={styles.container}>
      <div className={styles.list} >
      { stations.map(station =>(
        <ListItem name={station.name} radio={getRndInteger(20,200)} key={Math.random()} image={station.favicon}/>
      ))}
      </div>
    </div>
  );
}

export default RadioList;
