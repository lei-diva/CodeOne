import React from 'react';
import "./panel.styles.css";
import "../panel-list/panel-list.styles.css";
import { Form, Col } from 'react-bootstrap';


export const Panel = (props) => (
    <Col sm={true} className={props.display}> {/* Panel text area */}
        <Form.Control spellCheck="false" className="code-label" as="textarea" rows="1"
        onChange={e=> {props.fileChange(e.target.value, props.id, e)}}>{props.file}</Form.Control>

        <Form.Control className={`${props.name} codearea`} as="textarea" spellCheck="false" rows="25" placeholder=""
        onChange={e => {props.handleChange(e.target.value, props.name, e)}}>{props.content}</Form.Control>
    </Col>


);