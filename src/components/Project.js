import React, { Component  } from "react";
import cover from "../img/cover.jpg"

class Project extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div
            className="col-sm-12 col-md-6 col-lg-4 project"
            style={{ cursor: "pointer" }}
          >
            <div class = "card">
                    <img src={this.props.image} alt="" />
                    <div class="card-content">
                    <h2>{this.props.title}</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                    </p>
                    <a onClick={this.props.onClick} class="button">
                        More&nbsp;&nbsp;
                        <i class="fa fa-arrow-right"></i>
                    </a>
                    </div>
                </div>
          </div>
            // <div className="project">
            //     <div class="post" href="#">
            //         <h2 class="post-title">Olis</h2>
            //         <h3 class="post-description">A mobile app for homecooks</h3>
                    
	        //     </div>
                
            // </div>
            
        );
    }
}

export default Project;