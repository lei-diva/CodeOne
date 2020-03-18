import React from 'react';
import './project-list.styles.css';
import {Project} from '../project/project.component';

export const ProjectList = (props) => (
    <div className='project-list'>
    {props.projects.map((project, id) =>(
        <Project selectProject={props.selectProject} key={id} project={project}></Project>
    ))}
</div>
);