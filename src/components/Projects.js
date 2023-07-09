import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import Project from "./Project";
import olisGif from "../img/Olis.gif";
import cudaHybridGif from "../img/cudahybrid.gif";
import imlGif from "../img/iml.gif";

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
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <Project 
          title={projects.title} 
          image={projects.cover_image} 
          description = {projects.description}
          onClick={() => detailsModalShow(projects)}/>
        );
      });
    }
    let olisTech = [
      {
        iconName:"devicon-xamarin-plain",
        name:"Xamarin"
      },
      {
        iconName:"devicon-csharp-plain",
        name:"C#"
      }
    ];
    let cudaTech = [
      {
        iconName:"devicon-python-plain",
        name:"Python"
      },
      {
        iconName:"fa fa-microchip",
        name:"GPU"
      }
    ];
    let imlTech = [
      {
        iconName:"devicon-html5-plain",
        name:"HTML"
      },
      {
        iconName:"devicon-css3-plain",
        name:"CSS"
      },
      {
        iconName:"devicon-javascript-plain",
        name:"JavaScript"
      },
      {
        iconName:"devicon-linux-plain",
        name:"Linux"
      },
      {
        iconName:"devicon-apache-plain",
        name:"Apache"
      },
      {
        iconName:"devicon-mysql-plain",
        name:"mySQL"
      },
      {
        iconName:"devicon-php-plain",
        name:"PHP"
      },
      {
        iconName:"devicon-docker-plain",
        name:"Docker"
      },
      {
        iconName:"devicon-figma-plain",
        name:"Figma"
      }
    ];

    return (
      <section id="projects">
        <div className="section-div">
          <h1 className="section-title">
           Check out my <span className="magenta-handwriting">Projects</span>
          </h1>
          <p style={{fontSize:"1.3em", fontStyle:"italic"}}>*Hover over to see details</p>
          <div class="projects row">
          <Project title="Olis" image={olisGif} url="https://github.com/kimthuyha/Olis"
          description="This is a mobile app for homecooks. You can enter the ingredients and 
          instructions and the app will gather the information, send it to an API,
          and receive back the nutrition information, which is organized into 
          a nutrition lable." height="60em" width="28em" techs={olisTech}/>
          <div>
            <Project title="cuda-hybrid" image={cudaHybridGif} url="https://github.com/cuda-hybrid/cuda-hybrid"
            description="This was a research project I did. We worked on creating a tools for people
            to run ABM/FCM models faster by employing GPU. For one use case, the serial model took 30 minutes
            for 5000 agents, but that of using cuda-hybrid only took less than 1 second" 
            height="30em" width="55em" techs={cudaTech}/>
            <Project title="Instructinal Modeling Language" image={imlGif} url="https://sites.miamioh.edu/cse-senior-design-expo/2023/04/iml/"
            description="Our capstone team project was to continue the development of
            Instructional Modeling Language (IML) Web Framework and implement features 
            to improve the user experience for instructors and students such as 
            advanced user profiles, administrator account management, a discussion forum, 
            and a content management system for instructors to share academic materials 
            and guides for teaching IML (Instructional Modeling Language). This was one
            of 40 projects in the department, and we won 2nd place at the Outstanding
            Project Awards ceremony." 
            height="33em" width="70em" techs={imlTech}/>
            
          </div>
          
          </div>
          
        </div>
      </section>
    );
  }
}

export default Projects;
