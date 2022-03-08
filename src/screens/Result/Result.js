import React, { useState, useEffect } from "react";
import Bar from "../../components/Bar/Bar";
import style from "./Result.module.css";
import { urlList, periods, periodsData } from "../../utils/data";
import DataCard from "../../components/DataCard/DataCard";
import Loader from "../../components/Loader/Loader";
import GPA from "../../components/GPA/GPA";
import Modal from "../../components/Modal/Modal";
import { useHistory } from "react-router-dom";
import Motion from "../../js/Motion";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Estimator from "../../components/Estimator/Estimator";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionsCreators } from "../../state/actions";

const Result = ({
  location: {
    state: { regId, periodName, urlPosition },
  },
}) => {
  const [loaderIsVisible, setLoaderIsVisible] = useState(true);
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const { period, step } = periodsData[urlPosition];
  const history = useHistory();

  const { collection } = useSelector((state) => state.collections);
  const dispatch = useDispatch();
  const { getCollection, getLateCollection, setPeriod, setLatePeriod } =
    bindActionCreators(actionsCreators, dispatch);

  useEffect(() => {
    const modal = JSON.parse(window.localStorage.getItem("results-modal"));

    if (!modal) {
      setModalIsVisible(() => modal);
    }
  }, []);

  useEffect(() => {
    let isUnmount = false;

    const getData = async () => {
      const url = urlList[urlPosition];

      fetch(`${process.env.REACT_APP_BASE_URL}${url}`)
        .then((response) => response.json())
        .then((data) => {
          if (!isUnmount) {
            getCollection(data[regId.toString()]);
            setPeriod(periodName);
          }
          setLoaderIsVisible(() => false);
        })
        .catch((error) => {
          //do  nothing
        });
    };
    const getLateData = async (count) => {
      if (count === 0){setLoaderIsVisible(false); return;}
      const url = urlList[urlPosition + count];

      fetch(`${process.env.REACT_APP_BASE_URL}${url}`)
        .then((response) => response.json())
        .then((data) => {
          if (!isUnmount) {
            setLoaderIsVisible(false);
            getLateCollection(data[regId.toString()]);
            setLatePeriod(periods[urlPosition + count]);
          }
        });
    };

    getData();
  
     if (Number(regId.substring(0, 4)) >= Number(period.split(" ")[1])) {
    }
    else if(Number(regId.substring(0, 5) === "20200") && periodName === "Nov/Dec 2021"){
      const s = step-1;
      getLateData(s);

    }
    else getLateData(step);

    return () => (isUnmount = true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    history.goBack();
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
          <div className={`${style.tagsContainer}`}>
            <div
              className={`${style.nameTag} ${style.web_design}`}
              style={{
                fontWeight: "bold",
                paddingTop: "15px",
              }}
            >
              {collection.name}
            </div>
            <div className={style.infoTagWeb}>
              ID:
              <span>{regId}</span>
              For
              <span>{periodName}</span>
            </div>
            <div className={`${style.nameTag} ${style.gpaTag} `}>
              <GPA />
              <span>( GPA is exclusive of marks in minor specialization subjects )</span>
            </div>
            <Link
              to="/form/result/analyzer"
              className={style.analyzeTag}
              style={{
                textDecoration: "none",
              }}
            >
              <div>
                Analyzer
                <span>
                  Click to see your results and get a more detailed view of your
                  performance.
                </span>
              </div>
            </Link>
          </div>

          <div className={style.card_container}>
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
        </div>
        {modalIsVisible ? (
          <div className={style.modal_web}>
            <Modal
              value="Hover on the subject card to see marks."
              click={() => {
                setModalIsVisible(false);
                window.localStorage.setItem("results-modal", "false");
              }}
            />
          </div>
        ) : null}
        <Estimator className={style.estimator} />
      </>
    );
  } else {
    displayData = (
      <Modal value={"Registration Id not found"} click={handleClick} />
    );
  }

  return (
    <div className={style.result}>
      <Bar title="Result" arrowIsVisible={true} pathName="Form" />

      {displayData}
      {loaderIsVisible ? <Loader /> : null}
      <Motion Component={<Footer />} />
    </div>
  );
};

export default Result;
