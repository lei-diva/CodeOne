import React from 'react';
import "./panel.styles.css";
import "../panel-list/panel-list.styles.css";
import { Form, Col } from 'react-bootstrap';


export const Panel = (props) => (

    <Col sm={true} className={props.display}>
        <Form.Control className={`${props.name} codearea`} as="textarea" spellcheck="false" rows="27" placeholder={props.name}
        onChange={e => {props.handleChange(e.target.value, props.name, e)}}/>
    </Col>


);