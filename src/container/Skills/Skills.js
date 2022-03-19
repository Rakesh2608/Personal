import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import ReactToolTip from "react-tooltip";
import "./Skills.scss";
import { ThemeContext } from "../../Context";
const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    const query = '*[_type=="skills"]';
    const expQuery = '*[_type=="experiences"]';
    client.fetch(query).then((data) => setSkills(data));
    client.fetch(expQuery).then((data) => {
      setExperiences(data);
    });
  }, []);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <h2 className="head-text" style={{ color: darkMode && "#fff" }}>
        Skills & Experience
      </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((item) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item"
              key={item.name}
            >
              <div className="app__flex">
                <img src={urlFor(item.icon)} alt={item.name} />
              </div>

              <p>{item.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp" >
          {experiences.map((exp) => (
            <motion.div className="app__skills-exp-item" key={exp.year}>
              <div className="app__exp-year">
                <p className="bold-text" style={{ color: darkMode && "#fff" }}>{exp.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {exp.works.map((work) => (
                  <>
                    <motion.div
                      className="app__exp-work"
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text" style={{ color: darkMode && "#fff" }}>{work.name}</h4>
                      <p className="p-text" style={{ color: darkMode && "#fff" }}>{work.company}</p>
                    </motion.div>
                    <ReactToolTip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactToolTip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
