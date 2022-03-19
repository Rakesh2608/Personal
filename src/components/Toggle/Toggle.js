import React, { useContext } from "react";
import { ThemeContext } from "../../Context";
import "./Toggle.scss";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleSubmit = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="toggle">
      <span>☀️</span>
      <span>🌒</span>
      <div
        className="toggle-button"
        onClick={handleSubmit}
        style={{ left: theme.state.darkMode ? "0" : "25px" }}
      ></div>
    </div>
  );
};

export default Toggle;
