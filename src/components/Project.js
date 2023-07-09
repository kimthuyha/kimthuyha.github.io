import React from "react";
import gif from "../img/Olis.gif";

function TechIcon({iconName, name}) {
    var fullName = iconName + " text-center";
    return (
        <div className="text-center tech-icon">
            <i className={fullName} style={{ fontSize: "200%" }}></i>
            <p className="text-center">{name}</p>
        </div>

    );
}

function Project(props) {
    var techStack = props.techs.map(function (tech, i) {
        const name = tech.name;
        const iconName = tech.iconName;

        return (
            <TechIcon name={name} iconName={iconName}/>
        );
    });
    return (
    <div class="project-card" style={{height:props.height, width:props.width}}>
        <div class="innerCard">
            <div class="frontSide">
                <img src={props.image} class="project-img"></img>
            </div>
            <div class="backSide">
                <p class="project-title">{props.title}</p>
                
                <div style={{display:"flex", alignItems: "center"}}>
                    {techStack}
                </div>
                <p class="project-body">{props.description}</p>
                <a href={props.url} target="_blank" class="project-body">
                    Learn more
                </a>
                
            </div>
        </div>
    </div>

    );
}

function Project2() {
    return (
    <div class="project-card" style={{width:"43em", height:"24em"}}>
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
export default Project;
