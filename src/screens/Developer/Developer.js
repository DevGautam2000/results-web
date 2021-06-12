import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Bar from "../../components/Bar/Bar";
import style from "./Developer.module.css";
import { developerData } from "../../utils/data";
import Motion from "../../js/Motion";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/Modal/Modal";
import avatar from "../../assets/avatar.jpg";

export default function Developer() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const tags = [];
    const popups = [];
    developerData.forEach((e, index) => {
      tags.push(document.getElementById(`tag${index}`));
      popups.push(document.getElementById(`pop${index}`));
    });

    tags.forEach((e, index) => {
      e.addEventListener(
        "mouseover",
        () => (popups[index].style.display = "block")
      );
      e.addEventListener(
        "mouseleave",
        () => (popups[index].style.display = "none")
      );
    });

    if (!navigator.onLine) {
      setModalIsVisible(true);
    }
  }, []);

  return (
    <>
      <div className={style.developer}>
        <Bar
          title="Developer"
          arrowIsVisible={true}
          overlayHeight={300}
          pathName="Home"
        />

        <Motion
          Component={
            <>
              <img
                src={avatar}
                alt="developer_avatar"
                className={style.avatar}
              />
              <span style={{ marginTop: "10px" }}>Gautam Chandra Saha</span>

              <div className={style.container}>
                {developerData.map(({ id, src, link, name }, index) => (
                  <div key={id}>
                    <img
                      id={`tag${index}`}
                      src={src}
                      className={style.tags}
                      alt={name}
                      onClick={() => window.open(link)}
                    />

                    <div className={style.popup_container}>
                      <div id={`pop${index}`} className={style.popup}>
                        {name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          }
          styles={style.card}
        />
      </div>
      <Motion Component={<Footer />} />
      {modalIsVisible ? (
        <Modal
          value="Check your internet connection"
          click={() => {
            setModalIsVisible(false);
            history.goBack();
          }}
        />
      ) : null}
    </>
  );
}
