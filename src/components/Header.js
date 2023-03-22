import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import cover from "../img/cover2.svg";
import logo from "../img/logo(2).png";
import $ from "jquery";

class Header extends Component {
  titles = [];

  constructor() {
    super();
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }

    const HeaderTitleTypeAnimation = React.memo( () => {
      return <Typical className="title-styles" steps={this.titles} loop={50} />
    }, (props, prevProp) => true);

    return (
      <header id="home" style={{height: "100vh", display: 'block', padding: "0" }}>
        <div className="row aligner">
          <div className="col-md-6" >
            <img id="coverPhoto"
                src={cover}
                alt="logo"
                className="slide-in-left"
              />
          </div>
          <div className="col-md-6 headline">
              <br/>
              <h2>Hi, I'm</h2>
              <h1 className="mb-0 align-left">
                {name}
              </h1>
              <div className="title-container">
                <br/>
                <h2>You can call me <span className="wavy-underlined">Kim</span>.</h2>
                <br/>
                <h2>I'm an aspiring <em>full-stack developer</em></h2>
                <h2>with a knack for art, designing, and craft</h2>
                <br/>
                <a><h4><b>Read more</b></h4></a>
              </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
