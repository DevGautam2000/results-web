import React from "react";
import style from "./Loader.module.css";
import loaderGif from "./appGIF.gif";

function Loader() {
  return (
    <div className={style.loader}>
      <img src={loaderGif} alt="loading..." />
    </div>
  );
}

export default Loader;
