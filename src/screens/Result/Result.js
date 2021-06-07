import React, { useState, useEffect } from "react";
import Bar from "../../components/Bar/Bar";
import style from "./Result.module.css";
import { urlList } from "../../utils/data";
import DataCard from "../../components/DataCard/DataCard";
import Loader from "../../components/Loader/Loader";
import GPACalc from "../../components/GPA/GPACalc";
import Modal from "../../components/Modal/Modal";
import { useHistory } from "react-router-dom";
import Motion from "../../js/Motion";
import Footer from "../../components/Footer/Footer";

const Result = ({ location }) => {
  const { regId, periodName, urlPosition } = location.state;
  const [loaderIsVisible, setLoaderIsVisible] = useState(true);
  const [collection, setCollection] = useState({});
  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      const url = urlList[urlPosition];

      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setLoaderIsVisible(false);
          setCollection(data[regId.toString()]);
        });
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    history.goBack();
    // window.location.reload();
  };

  let displayData;

  if (collection) {
    displayData = (
      <>
        <div className={style.infoTag}>
          ID:
          <span>{regId}</span>
          For
          <span>{periodName}</span>
        </div>
        <div className={style.container}>
          <div
            className={style.nameTag}
            style={{
              fontWeight: "bold",
              paddingTop: "15px",
            }}
          >
            {collection.name}
          </div>
          <div className={style.nameTag}>
            <GPACalc data={collection} />
          </div>

          {Object.keys(collection).map((code) => {
            return code !== "name" ? (
              <DataCard
                key={code}
                code={code}
                credit={collection[code]["credit"]}
                ext={collection[code]["ext"]}
                grade={collection[code]["grade"]}
                int={collection[code]["int"]}
                sub={collection[code]["sub"]}
                tot={collection[code]["tot"]}
              />
            ) : null;
          })}
        </div>
        <Motion Component={<Footer />} />
      </>
    );
  } else {
    displayData = (
      <Modal value={"Registration Id not found"} click={handleClick} />
    );
  }

  return (
    <div className={style.result}>
      <Bar title="Result" arrowIsVisible={true} path="/form" pathName="Form" />

      {displayData}
      {loaderIsVisible ? <Loader /> : null}
    </div>
  );
};

export default Result;
