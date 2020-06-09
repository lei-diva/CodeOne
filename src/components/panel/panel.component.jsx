import React from 'react';
import "./panel.styles.css";
import "../panel-list/panel-list.styles.css";
import { Form, Col } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {content} from '../../actions';
import { Filename } from '../filename/filename.component';
import { nodeInternals } from 'stack-utils';

export const Panel = (props) => {
    const dispatch = useDispatch();
    const text = useSelector(state=> state.playground.panels[props.name].content);
    const display = useSelector(state=> state.playground.panels[props.name].display);

    let styles = {}

    if (!display) {
       styles = {
           display: 'none'
       }
    }

    return (
        <Col sm={true} style={styles}>

            <Filename name={props.name} key={props.key}/>
            <Form.Control className="codearea" as="textarea" spellCheck="false" rows="50" placeholder=""
            onChange={(e)=> dispatch(content(props.name, e.target.value))}>{text}</Form.Control>

        </Col>


);

}