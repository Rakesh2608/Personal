import React, { useContext } from "react";
import { NavigationDots, SocialMedia } from "../components";
import { ThemeContext } from "../Context";
const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div
          className="app__wrapper app__flex "
          style={{
            backgroundColor: darkMode ? "#222" : "",
            color: darkMode && "#fff",
          }}
        >
          <Component />
          <div className="copyright">
            <p className="p-text" style={{ color: darkMode && "#fff" }}>
              @2022
            </p>
            <p className="p-text" style={{ color: darkMode && "#fff" }}>
              All rights reserved
            </p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
