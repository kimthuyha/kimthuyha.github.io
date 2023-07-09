import React, { Component } from "react";
import "react-vertical-timeline-component/style.min.css";

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;

        return (
          <div className="experience-item row">
            <div className="col-md-2 year">
              {work.years}
            </div>
            <div className="col-md-2 company">
              {work.company}
            </div>
            <div className="col-md-2 title">
              {work.title}
            </div>
            <div className="col-md-6 description">
              {work.description}
            </div>
          </div>
          // <VerticalTimelineElement
          //   className="vertical-timeline-element--work"
          //   date={work.years}
          //   iconStyle={{
          //     background: "#AE944F",
          //     color: "#fff",
          //     textAlign: "center",
          //   }}
          //   icon={<i className="fab fa-angular experience-icon"></i>}
          //   key={i}
          // >
          //   <div style={{ textAlign: "left", marginBottom: "4px" }}>
          //     {mainTech}
          //   </div>

          //   <h3
          //     className="vertical-timeline-element-title"
          //     style={{ textAlign: "left" }}
          //   >
          //     {work.title}
          //   </h3>
          //   <h4
          //     className="vertical-timeline-element-subtitle"
          //     style={{ textAlign: "left" }}
          //   >
          //     {work.company}
          //   </h4>
          //   <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
          // </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="experience" className="section-div">
        <h1 className="section-title">
            My <span className="butter">stories</span>
        </h1>
          {work}
      </section>
    );
  }
}

export default Experience;
