import React from "react";
import gif from "../img/cudahybrid.gif";

function TechIcon({iconName, name}) {
    var fullName = iconName + " text-center";
    return (
        <div className="text-center tech-icon">
            <i className={fullName} style={{ fontSize: "200%" }}></i>
            <p className="text-center">{name}</p>
        </div>

    );
}

function CudaHybrid() {
    return (
    <div class="project-card" style={{width:"58em", height:"30em"}}>
        <div class="innerCard">
            <div class="frontSide">
                <img src={gif} class="project-img"></img>
            </div>
            <div class="backSide">
                <p class="project-title">Olis</p>
                
                <div style={{display:"flex", alignItems: "center"}}>
                    <TechIcon name="Xamarin" iconName="devicon-xamarin-plain" />
                    <TechIcon name="C#" iconName="devicon-xamarin-plain" />
                </div>
                <p class="project-body">
                    This is a mobile app for homecooks. You can enter the ingredients and 
                    instructions and the app will gather the information, send it to an API,
                    and receive back the nutrition information, which is organized into 
                    a nutrition lable.
                </p>
                <a href="https://github.com/kimthuyha/Olis" target="_blank" class="project-body">
                    Learn more
                </a>
                
            </div>
        </div>
    </div>

    );
}

export default CudaHybrid;
