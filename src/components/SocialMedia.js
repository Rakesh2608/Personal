import React, { useContext } from "react";
import { FiFacebook } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { ThemeContext } from "../Context";
const SocialMedia = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="app__social"
      style={{
        backgroundColor: darkMode ? "#222" : "",
        color: darkMode && "#fff",
        
      }}
    >
      <div>
        <FiFacebook />
      </div>
      <div>
        <FaLinkedin />
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;
