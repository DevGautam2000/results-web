import React from "react";
import style from "./Card.module.css";
import arrow from "../../assets/right_arrow.svg";

const Card = ({ name, imagesrc }) => {
  return (
    <div className={style.card}>
      <span className={style.container}>
        <span>
          <img className={style.image} src={imagesrc} alt={name} />
        </span>
        <span>{name}</span>
      </span>
      <img src={arrow} alt="arrow" className={style.arrow} />
    </div>
  );
};

export default Card;
