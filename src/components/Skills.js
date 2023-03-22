import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.sharedSkills.icons.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{ fontSize: "220%" }}>
                </i>
                <h4
                    className="text-center"
                    style={{ marginTop: "4px" }}
                  >
                    {skills.name}
                  </h4>
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12 section-div">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
            <h1 className="section-title">
              <span>learning new <span className="highlighted">skills</span> and honing my crafts 📖 🔅</span>
            </h1>
        </div>
      </section>
    );
  }
}

export default Skills;
