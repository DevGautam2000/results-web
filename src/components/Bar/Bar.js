import React from "react";
import style from "./Bar.module.css";
import arrow from "../../assets/left_arrow.png";
import play from "../../assets/google-play.svg";
import source from "../../assets/source.svg";
import { useHistory } from "react-router-dom";
import CustomizedSwitches from "../MUI_switch/Mui_switch";

const Bar = ({
  title,
  arrowIsVisible,
  overlayHeight,
  pathName,
  homePath,
  sourceTag,
}) => {
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

  const info = [
    {
      id: 1,
      name: "Source",
      img_path: source,
      src: "https://github.com/DevGautam2000/results-web",
    },
    {
      id: 2,
      name: "Download",
      img_path: play,
      src: "https://github.com/DevGautam2000/Results/releases",
    },
  ];

  return (
    <>
      <div className={style.bar}>
        <CustomizedSwitches/>
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

        {sourceTag ? (
          <span className={style.source}>
            {info.map(({ id, name, img_path, src }, index) => (
              <div key={id} id={`div${index}`} className={style.div}>
                <a href={src} target="_blank" rel="noopener noreferrer">
                  <img
                    id={`img${index}`}
                    className={style.img}
                    src={img_path}
                    alt={name}
                  />
                </a>
                <span className={style.popup_container}>
                  <span className={style.name} onClick={() => window.open(src)}>
                    {name}
                  </span>
                </span>
              </div>
            ))}
          </span>
        ) : null}
      </div>
      <div style={{ height: `${overlayHeight}px` }} className={style.overlay} />
    </>
  );
};

export default Bar;
