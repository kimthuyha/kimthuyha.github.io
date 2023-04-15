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
          <h3>Welcome to my personal website. This is where I showcase my projects as well as my experience.
            You can find below the list of applicaitions that I have worked on along with some experience that
            I gained along the way 😊.
          </h3>
          <h3>
          To introduce a little bit about myself, I am a recent CS grad and going to work at a tech company upon my gradution.
          I have mostly worked on back-end projects but am also interested in front-end development 🤓.
          </h3>
          <h3>
          Other than tech, crafts and movie are also big parts of my life. I really hope that I can share those with you here
          in the future 📽️. 
          </h3>
          <h3>
          What you are seeing now is my portfolio template in use (<a>link</a>),
          which used Dorota1997's template as the base, and with a lot of modification, I tried to customize it
          to make sure the page represents me.
          </h3>
          <h3>Hope you enjoy ❤️</h3>
                 
        </div>
      </section>
    );
  }
}

export default About;
