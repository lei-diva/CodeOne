import React from 'react';
import './project-list.styles.css';
import {Project} from '../project/project.component';
import { Container } from 'react-bootstrap';


export const ProjectList = (props) => (
    <div>
    <Container className='project-list'>
    {props.projects.map((project, id) =>(
        <div>
        <button className="delete-button" onClick={(e) => {props.deleteProject(project.name)}}><span id="subtract">-</span></button>
        <Project selectProject={props.selectProject} key={id} project={project}></Project>
        </div>
    ))}
    </Container>
</div>
);