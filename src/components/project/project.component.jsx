import React from 'react';
import './project.styles.css';

export const Project = (props) => {

    const htmlcontent = props.project.content.Html;
    const csscontent = props.project.content.Css;
    const src = `<html><head><style type="text/css">${csscontent}</style></head><body>${htmlcontent}</body></html`;
    const seconds = props.project.content.date.seconds;
    var d = new Date(seconds * 1000);
    var ds = d.toLocaleString();
    console.log(ds);
    return (
    <div className="project-container" onClick={(e)=>{props.selectProject(props.project.content, props.project.name)}}>

        <p className="project-title">{props.project.name}</p>
        <iframe id="preview" srcDoc={src}></iframe>

        <p className="date-time">{ds}</p>


    </div>
);
}