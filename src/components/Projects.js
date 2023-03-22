import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import Project from "./Project";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <Project 
          title={projects.title} 
          image={projects.images[0]} 
          onClick={() => detailsModalShow(projects)}/>
        );
      });
    }

    return (
      <section id="projects">
        <div className="section-div">
          <h1 className="section-title">
            <span><span className="wavy-underlined">Projects</span> that I've worked on</span>
          </h1>
          <div className="col-md-12" style={{padding: "3em 0 0 0"}}>
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
