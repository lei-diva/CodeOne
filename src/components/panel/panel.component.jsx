import React from 'react';
import "./panel.styles.css";
import "../panel-list/panel-list.styles.css";
import { Form, Col } from 'react-bootstrap';


export const Panel = (props) => (


    <Col md className={props.display}>
    <Form.Label>{props.name}</Form.Label>
        <Form.Control className="codearea" as="textarea" rows="20" placeholder="Code here..."
        onChange={props.handleChange}/>
    </Col>


);