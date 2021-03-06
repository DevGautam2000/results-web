import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import style from "./Form.module.css";
import { Button, TextField } from "@material-ui/core";
import Modal from "../../components/Modal/Modal";
import { periods, periodsSupplementary } from "../../utils/data";
import { useHistory } from "react-router-dom";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useActionCreators } from "../../state/creators";

export default function Form() {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
  }));
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 200,
      },
    },
  };

  function getStyles(name, periodName, theme) {
    return {
      fontWeight:
        periodName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const classes = useStyles();
  const theme = useTheme();
  const [periodName, setPeriodName] = useState("");
  const [regId, setRegId] = useState("");
  const [err, setErr] = useState("");
  const [modalVisibility, setModalVisibility] = useState(false);
  const [periodType, setPeriodType] = useState("semester");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    checkConditionals();
  };

  const navigateToResult = () => {
    history.push({
      pathname: "/form/result",
      state: {
        regId: regId,
        type: periodType,
        periodName: periodName,
        urlPosition:
          periodType === "semester"
            ? periods.indexOf(periodName)
            : periodsSupplementary.indexOf(periodName),
      },
    });
  };

  const checkConditionals = () => {
    let errText = "";
    let isVisible = false;

    if (!navigator.onLine) {
      errText = "Check internet connection";
      isVisible = true;
    } else if (periodName.length === 0) {
      errText = "Select period from list";
      isVisible = true;
    } else if (regId.length === 0) {
      errText = "Enter Id";
      isVisible = true;
    } else if (regId.length <= 7 || regId.length > 9) {
      errText = "Invalid Id";
      isVisible = true;
    } else {
      setPeriodName("");
      setRegId("");
      navigateToResult();
    }
    setErr(errText);
    setModalVisibility(isVisible);
  };

  const { getCollection, getLateCollection, setPeriod, setLatePeriod } =
    useActionCreators();

  useEffect(() => {
    //as the data is in state we need to remove it;
    getCollection({});
    getLateCollection({});
    setPeriod("");
    setLatePeriod("");

    // eslint-disable-next-line
  }, []);

  const handleChange = (event, newAlignment) => {
    setPeriodType(() => newAlignment);
    setPeriodName(() => "");
  };

  return (
    <>
      <div className={style.form}>
        <form className={style.form_container}>
          <ToggleButtonGroup
            color="warning"
            id={style.tbg}
            value={periodType}
            exclusive
            onChange={handleChange}
            defaultChecked
          >
            <ToggleButton
              value="semester"
              sx={{ textTransform: "none", width: "100%" }}
            >
              Semester
            </ToggleButton>
            <ToggleButton
              value="supplementary"
              sx={{ textTransform: "none", width: "100%" }}
            >
              Supplementary
            </ToggleButton>
          </ToggleButtonGroup>
          <FormControl
            className={clsx(
              classes.formControl,
              classes.noLabel,
              style.form_style
            )}
          >
            {periodType === "semester" ? (
              <Select
                displayEmpty
                value={periodName}
                onChange={(e) => setPeriodName(e.target.value)}
                input={<Input />}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  <em>Select Duration</em>
                </MenuItem>
                {periods.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, periodName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            ) : (
              <Select
                displayEmpty
                value={periodName}
                onChange={(e) => setPeriodName(e.target.value)}
                input={<Input />}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  <em>Select Duration</em>
                </MenuItem>
                {periodsSupplementary.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, periodName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            )}
          </FormControl>
          <TextField
            className={style.form_style}
            placeholder="Registration ID"
            value={regId}
            type="number"
            onSubmit={handleSubmit}
            onChange={(e) => setRegId(e.target.value)}
          />

          <Button
            style={{
              background: "rgb(245, 96, 153)",
              marginTop: "10px",
            }}
            className={style.form_style}
            type="submit"
            variant="contained"
            color="secondary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
      {modalVisibility ? (
        <Modal value={err} click={() => setModalVisibility(false)} />
      ) : null}
    </>
  );
}
