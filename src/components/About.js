import React, { Component } from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <h1 className="section-title">👋 Nice to meet you!</h1>
        
        <div className="des">
          <h3>Welcome to my personal website. I first created this page because I want to learn React,  
            but then I got ambitious and want something more. Tech is a huge part of me, but also are art and crafts, 
            and I want this page to reflect that dynamics.  For now, it might not be there yet, but it WILL. 
          </h3>
          <h3>
          I like design and play with the front end frameworks to make pretty pages, but for some reasons,
          I've spent majority of the time doing the backend work, which I also love. That's why this page is a way
          for me to fill in the gaps that are missing for me to become a full-stack developer 📽️. 
          </h3>
          <h3>
          What you are seeing now is my portfolio template in use (<a>link</a>),
          which is inspired by Dorota1997's template. I want the website to represent me 
          so I rewrote a lot of the parts and added a lot of me factors. If you like this template, 
          follow the link I mentioned or in the project section and star ⭐ the repository 
          to make it more recognizable for other users.
          </h3>
          <h3>Hope you enjoy 💜</h3>
                 
        </div>
      </section>
    );
  }
}

export default About;
