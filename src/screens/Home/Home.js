import React, { useEffect } from "react";
import Motion from "../../hocs/Motion";
import Bar from "../../components/Bar/Bar";
import Card from "../../components/Card/Card";
import style from "./Home.module.css";
import { homeCardData } from "../../utils/data";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Estimator from "../../components/Estimator/Estimator";

export default function Home() {
  useEffect(() => {
    if (window.localStorage.getItem("results-modal") === null)
      window.localStorage.setItem("results-modal", "true");
  }, []);
  return (
    <>
      <div className={style.home}>
        <Bar title="Results" sourceTag={true} />

        <Motion
          Component={homeCardData.map(({ id, name, image, link }) => (
            <Link to={link} key={id} style={{ textDecoration: "none" }}>
              <Card name={name} imagesrc={image} />
            </Link>
          ))}
          styles={style.card_container}
        />
      </div>
      <Estimator />
      <Motion Component={<Footer />} />
    </>
  );
}
