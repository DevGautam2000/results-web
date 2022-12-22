import React, { useState, useEffect } from "react";
import Bar from "../../components/Bar/Bar";
import style from "./Result.module.css";
import {
  urlList,
  urlListSupplementary,
  periods,
  periodsData,
  periodsDataSupplementary,
} from "../../utils/data";
import DataCard from "../../components/DataCard/DataCard";
import Loader from "../../components/Loader/Loader";
import GPA from "../../components/GPA/GPA";
import Modal from "../../components/Modal/Modal";
import { useHistory } from "react-router-dom";
import Motion from "../../hocs/Motion";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Estimator from "../../components/Estimator/Estimator";
import { useSelector } from "react-redux";
import { useActionCreators } from "../../state/creators";
import AnalyzerButton from "../../components/AnalyzerButton/AnalyzerButton";
const Result = ({ location }) => {
  const [loaderIsVisible, setLoaderIsVisible] = useState(true);
  const [modalIsVisible, setModalIsVisible] = useState(true);

  const history = useHistory();

  const { collection } = useSelector((state) => state.collections);
  const { getCollection, getLateCollection, setPeriod, setLatePeriod } =
    useActionCreators();
  const dummyState = Object.freeze({
    regId: "",
    periodName: "",
    urlPosition: 0,
    type: "",
  });
  const { regId, periodName, urlPosition, type } =
    location?.state || dummyState;
  const { period, step, blackList } =
    type.length > 0 && type === "semester"
      ? periodsData[urlPosition]
      : periodsDataSupplementary[urlPosition];
  const len = (o) => o.length <= 0;

  useEffect(() => {
    const modal = JSON.parse(window.localStorage.getItem("results-modal"));

    if (!modal) {
      setModalIsVisible(() => modal);
    }
  }, []);

  useEffect(() => {
    let isUnmount = false;

    if (len(regId) && len(type) && len(periodName) && urlPosition === 0) {
      history.replace("/form");
      return () => (isUnmount = true);
    }

    const getData = async () => {
      const url =
        type === "semester"
          ? urlList[urlPosition]
          : urlListSupplementary[urlPosition];
      // if (url === undefined) {
      //   return;
      // }
      fetch(`${process.env.REACT_APP_BASE_URL}${url}`)
        .then((response) => response.json())
        .then((data) => {
          if (!isUnmount) {
            getCollection(data[regId.toString()]);
            setPeriod(periodName);
          }
          setTimeout(() => {
            setLoaderIsVisible(() => false);
          }, 200);
        })
        .catch((err) => {
          // history.push("/");
        });
    };
    const getLateData = async (count) => {
      if (count === 0) {
        setLoaderIsVisible(false);
        return;
      }
      const url = urlList[urlPosition + count];
      // if (url === undefined) {
      //   return;
      // }
      // console.log({ url }, { urlPosition }, { count });
      fetch(`${process.env.REACT_APP_BASE_URL}${url}`)
        .then((response) => response.json())
        .then((data) => {
          if (!isUnmount) {
            getLateCollection(data[regId.toString()]);
            setLatePeriod(periods[urlPosition + count]);

            setLoaderIsVisible(false);
          }
        })
        .catch((err) => {
          // history.push("/");
        });
    };

    getData();

    if (Number(regId?.substring(0, 4)) >= Number(period?.split(" ")[1])) {
    } else if (
      (blackList.length > 0 && blackList.includes(regId?.substring(0, 5))) ||
      blackList.includes(regId?.substring(0, 4))
    ) {
      const s = step - 1;
      getLateData(s);
    } else getLateData(step);

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
          <span>
            {periodName}
            {type === "semester" ? null : " Suppl.."}
          </span>
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
              {collection.name === "NA" ||
              collection.name === null ||
              collection.name === undefined
                ? ""
                : collection.name}
            </div>
            <div className={style.infoTagWeb}>
              ID:
              <span>{regId}</span>
              For
              <span>
                {periodName}
                {type === "semester" ? null : " Suppl.."}
              </span>
            </div>
            <div className={`${style.nameTag} ${style.gpaTag} `}>
              {type === "semester" ? (
                <>
                  <GPA />
                  <span>
                    ( GPA is exclusive of marks in minor specialization subjects
                    )
                  </span>
                </>
              ) : null}
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

        <div className={style.wrapper}>
          <AnalyzerButton  />
          <Estimator />
        </div>
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
