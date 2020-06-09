import React from 'react';
import './project-name.styles.css';
import {useSelector, useDispatch} from 'react-redux';
import {Form} from 'react-bootstrap';
import {projectname} from '../../actions';


export const ProjectName = () => {
    const name = useSelector(state => state.playground.projectname);
    const dispatch = useDispatch();

    return (
    <Form.Control spellCheck="false" type="text" className="project_title form-control" placeholder="Untitled"
    value={name} onChange={(e)=> dispatch(projectname(e.target.value))}></Form.Control>
);
}
