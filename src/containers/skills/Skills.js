import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }

  // Group skills in pairs (category, content)
  const groupedSkills = [];
  for (let i = 0; i < skillsSection.skills.length; i += 2) {
    groupedSkills.push({
      category: skillsSection.skills[i],
      content: skillsSection.skills[i + 1] || ""
    });
  }

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div className="skills-sections-container">
              {groupedSkills.map((skillGroup, i) => {
                return (
                  <div key={i} className="skill-section">
                    <h3 className="skill-section-title">
                      {skillGroup.category}
                    </h3>
                    <div className="skill-section-content">
                      <p
                        className={
                          isDark
                            ? "dark-mode subTitle skills-text"
                            : "subTitle skills-text"
                        }
                      >
                        {skillGroup.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
