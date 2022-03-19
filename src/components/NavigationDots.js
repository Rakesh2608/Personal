/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React, { useContext } from "react";
import { ThemeContext } from "../Context";

const NavigationDots = ({ active }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="app__navigation"
      style={{
        backgroundColor: darkMode ? "#222" : "",
        color: darkMode && "#fff",
      }}
    >
      {["home", "about", "work", "skills", "contact"].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
