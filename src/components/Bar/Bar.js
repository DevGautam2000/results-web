import React from "react";
import style from "./Bar.module.css";
import arrow from "../../assets/left_arrow.png";
import { useHistory } from "react-router-dom";

const Bar = ({ title, arrowIsVisible, overlayHeight, pathName }) => {
  const history = useHistory();

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    fontSize: "13px",
    fontWeight: "bold",
    padding: "2px",
    cursor: "pointer",
    marginRight: "40px",
  };

  return (
    <>
      <div className={style.bar}>
        {arrowIsVisible ? (
          <div
            onClick={() => {
              history.goBack();
            }}
            style={linkStyle}
          >
            <img src={arrow} className={style.navigateBack} alt="back_arrow" />
            <span style={{ marginLeft: "10px" }}>{pathName}</span>
          </div>
        ) : null}
        {arrowIsVisible ? <span className={style.title}>{title}</span> : title}
      </div>
      <div style={{ height: `${overlayHeight}px` }} className={style.overlay} />
    </>
  );
};

export default Bar;
