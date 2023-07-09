import React from "react";
import $ from "jquery";
import Logo from "./Logo";

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      iconVisible: false
    };
  }

  componentDidMount() {

    // $(".navbar-toggler").on("click", function() {
    //   if (!$("#mainNav").hasClass("navbar-reduce")) {
    //     $("#mainNav").addClass("navbar-reduce");
    //   }
    // });

    // window.addEventListener("scroll", () => {
    //   if (window.pageYOffset > 50) {
    //     document
    //       .querySelector(".navbar-expand-md")
    //       .classList.add("navbar-reduce");
    //     document
    //       .querySelector(".navbar-expand-md")
    //       .classList.remove("navbar-trans");
    //     document
    //       .querySelector(".nav-cont")
    //       .classList.remove("hide");

    //   } else {
    //     document
    //       .querySelector(".navbar-expand-md")
    //       .classList.add("navbar-trans");
    //     document
    //       .querySelector(".navbar-expand-md")
    //       .classList.remove("navbar-reduce");
    //     document
    //       .querySelector(".nav-cont")
    //       .classList.add("hide");
    //   }
    // });

  }

  render() {
    return (
      // <div className="hide nav-cont">
      //   <nav
      //   className="navbar navbar-b navbar-trans navbar-expand-md fixed-top hide"
      //   id="mainNav"
      // >

      //   <div className="container">
      //     <a className="navbar-brand js-scroll" href="#top">
      //       <Logo width="2em"/>
      //     </a>
      //     <div
      //       className="navbar-collapse collapse justify-content-end"
      //       id="navbarDefault"
      //     >
      //       <ul className="navbar-nav">
      //         <li className="nav-item">
      //           <a className="nav-link js-scroll active" href="#home">
      //             Home
      //           </a>
      //         </li>
      //         <li className="nav-item">
      //           <a className="nav-link js-scroll" href="#projects">
      //             Projects
      //           </a>
      //         </li>
      //         <li className="nav-item">
      //           <a className="nav-link js-scroll" href="#experience">
      //             Journey
      //           </a>
      //         </li>
      //         <li className="nav-item">
      //           <a className="nav-link js-scroll" href="#contact">
      //             Contact
      //           </a>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
      // </div>
      <div class="l-navbar" id="nav-bar">
        <nav class="nav">
            <div> 
              <a href="#top" class="nav_logo"> 
                <Logo width="1.5em"/>
                {/* <span class="nav_logo-name">KTH</span>  */}
              </a>
              <a href="#projects" class="nav_link active"> 
                <i class="fa fa-briefcase" style={{color: "#fcfcfc", fontSize:"1.3em"}}></i>
                {/* <span class="nav_name">Projects</span>  */}
              </a> 
   
              
            </div>
        </nav>
    </div>
      
    );
  }
}

export default Navbar;