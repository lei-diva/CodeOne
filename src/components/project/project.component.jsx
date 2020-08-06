import React from "react";
import "./project.styles.css";
import ProjectIcon from "../../images/project.png";
import { useDispatch } from "react-redux";
import { selectProject } from "../../actions";
import { withRouter, Link } from "react-router-dom";

const Project = props => {
  const dispatch = useDispatch();
  const htmlcontent = props.project.content.Html;
  const csscontent = props.project.content.Css;
  const src = `<html><head><style type="text/css">${csscontent}</style></head><body>${htmlcontent}</body></html`;
  const seconds = props.project.content.date.seconds;
  var d = new Date(seconds * 1000);
  var ds = d.toLocaleString();
  console.log(ds);
  return (
    <>
      <button
        className="delete-button"
        onClick={e => {
          props.deleteProject(props.project.name);
        }}
      >
        <span id="subtract">x</span>
      </button>
      <div
        className="project-container"
        onClick={e => {
          dispatch(selectProject(props.project.name, props.project.content));
          props.history.push("playground");
        }}
      >
        <p className="project-title">{props.project.name}</p>
        <iframe id="preview" srcDoc={src}></iframe>

        <p className="date-time">{ds}</p>
      </div>
    </>
  );
};

export default withRouter(Project);
