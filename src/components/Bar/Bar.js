import React from "react";
import style from "./Bar.module.css";
import arrow from "../../assets/left_arrow.png";
import { useHistory } from "react-router-dom";

const Bar = ({ title, arrowIsVisible, overlayHeight, pathName, homePath }) => {
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
            <span className={style.go_back} style={{ marginLeft: "10px" }}>
              {pathName}
            </span>
          </div>
        ) : null}
        {homePath ? (
          <span
            className={style.goto_home}
            onClick={() => {
              history.goBack();
              history.goBack();
              history.goBack();
            }}
          >
            Home
          </span>
        ) : null}
        {arrowIsVisible ? <span className={style.title}>{title}</span> : title}
      </div>
      <div style={{ height: `${overlayHeight}px` }} className={style.overlay} />
    </>
  );
};

export default Bar;
