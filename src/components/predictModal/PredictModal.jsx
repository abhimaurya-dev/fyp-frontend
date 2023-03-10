import React from "react";
import ReactDOM from "react-dom";
import classes from "./PredictModal.module.css";

const PredictModal = (props) => {
  console.log("in modal");
  return ReactDOM.createPortal(
    <>
      <div className={classes.overlay} onClick={props.onClickHandler}></div>
      <div className={classes["modal-content"]}>
        <p className={classes.para}>
          You should grow <span>{props.predictedCrop}</span> with your soil
          condition and environment for better prodcution
        </p>
        <button className={classes.btn} onClick={props.onClickHandler}>
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default PredictModal;
