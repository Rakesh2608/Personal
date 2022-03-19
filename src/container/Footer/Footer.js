import React, { useContext, useState } from "react";
import "./Footer.scss";
import { images } from "../../constants";
import { client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import { ThemeContext } from "../../Context";
const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: "contact",
      name: username,
      email: email,
      message: message,
    };
    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <h2 className="head-text" style={{ color: darkMode && "#fff" }}>
        Want to Chat with Me!
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:rakeshkr2608@gmail.com" className="p-text">
            rakeshkr2608@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+917004277787" className="p-text">
            +917004277787
          </a>
        </div>
      </div>
      {!isSubmitted ? (
        <div
          className="app__footer-form"
          style={{ boxShadow: darkMode && "0 0 0px" }}
        >
          <div className="app__flex">
            <input
              style={{ backgroundColor: darkMode && "#444" }}
              className="p-text"
              type="text"
              placeholder="Your name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              style={{ backgroundColor: darkMode && "#444" }}
              className="p-text"
              type="email"
              placeholder="Your email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <textarea
              style={{ backgroundColor: darkMode && "#444" }}
              className="p-text"
              placeholder="Your message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button
            className="app__footer-button"
            type="button"
            onClick={handleSubmit}
          >
            {!loading ? "Send Message" : "sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app_footer"),
  "contact",
  "app_whitebg"
);
