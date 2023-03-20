import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import cover from "../img/cover2.jpg";
import logo from "../img/logo(2).png";
import $ from "jquery";

class Header extends Component {
  titles = [];

  constructor() {
    super();
  }

  resize() {
    $('#coverPhoto').height = window.innerHeight;
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize());
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize())
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
                style={{height: "100vh"}}
              />
          </div>
          <div className="col-md-6 align-left" style={{padding: "50px"}}>
              <br/>
              <h1>Hi, I'm</h1>
              <h1 className="mb-0 align-left">
                {<Typical steps={[name]} wrapper="p" />}
              </h1>
              <div className="title-container">
                <h2>You can call me Kim.</h2>
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
