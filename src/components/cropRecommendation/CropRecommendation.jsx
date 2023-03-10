import React, { useState } from "react";
import axios from "axios";
import classes from "./CropRecommendation.module.css";

const CropRecommendation = (props) => {
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const queryArray = [
      nValue,
      pValue,
      kValue,
      temprature,
      humidity,
      pHValue,
      rainfall,
    ];
    try {
      const prediction = await axios.post("http://localhost:8000/predict/", {
        query_array: queryArray,
      });
      if (prediction) {
        setPredictedCrop(prediction.data.predicted_crop);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const [nValue, setNValue] = useState(0);
  const [pValue, setPValue] = useState(0);
  const [kValue, setKValue] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [temprature, setTemprature] = useState(0);
  const [rainfall, setRainfall] = useState(0);
  const [pHValue, setPHValue] = useState(0);
  const [predictedCrop, setPredictedCrop] = useState("");
  return (
    <div className={classes["form-container"]}>
      <form className={classes.form}>
        <input
          type="number"
          className={classes.value}
          onChange={(e) => setNValue(parseFloat(e.target.value))}
        />
        <label>N Value</label>
        <input
          type="number"
          className={classes.value}
          onChange={(e) => setPValue(parseFloat(e.target.value))}
        />
        <label>P Value</label>
        <input
          type="number"
          className={classes.value}
          onChange={(e) => setKValue(parseFloat(e.target.value))}
        />
        <label>K Value</label>
        <input
          type="number"
          className={classes.value}
          onChange={(e) => setHumidity(parseFloat(e.target.value))}
        />
        <label>Humidity</label>
        <input
          type="number"
          className={classes.value}
          onChange={(e) => setTemprature(parseFloat(e.target.value))}
        />
        <label>Temprature</label>
        <input
          type="number"
          className={classes.value}
          onChange={(e) => setPHValue(parseFloat(e.target.value))}
        />
        <label>pH Value</label>
        <input
          type="number"
          className={classes.value}
          onChange={(e) => setRainfall(parseFloat(e.target.value))}
        />
        <label>Rainfall</label>
        <button className={classes.btn} onClick={onSubmitHandler}>
          Get Recommendation
        </button>
      </form>
    </div>
  );
};

export default CropRecommendation;
