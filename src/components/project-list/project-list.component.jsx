import React from "react";
import "./project-list.styles.css";
import Project from "../project/project.component";
import { Container } from "react-bootstrap";

export const ProjectList = props => (
  <div>
    <Container className="project-list">
      {props.projects.map((project, id) => (
        <div>
          <Project
            key={id}
            project={project}
            deleteProject={props.deleteProject}
          ></Project>
        </div>
      ))}
    </Container>
  </div>
);
