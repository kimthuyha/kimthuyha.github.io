import React from "react";
import Drawing from './Drawing';

function Home(props) {
  if (props.sharedData) {
    var name = props.sharedData.name;
  }

  return (
    <div className="row landing-page">
      <div className="col-md-6">
        <Drawing />

      </div>
      <div className="col-md-4 headline">
        <h2>Hi, I'm</h2>
        <h1 className="name">
          {name}
        </h1>
        <div className="headline">
          <br />
          <h2>You can call me <span className="wavy-underlined">Kim</span>.</h2>
          <br />
          <h2>I'm an aspiring <em>full-stack developer</em></h2>
          <h2>with a knack for art and crafts</h2>
          <br />
          <a href="kimthuyhaa@gmail.com"><h4><b>kimthuyhaa@gmail.com</b></h4></a>
        </div>
      </div>
    </div>
  );
}

export default Home;
