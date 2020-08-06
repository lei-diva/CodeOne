import React from "react";
import "./filename.css";
import { useSelector, useDispatch } from "react-redux";
import { filename } from "../../actions";
import { Form } from "react-bootstrap";

export const Filename = props => {
  const dispatch = useDispatch();
  const name = useSelector(
    state => state.playground.panels[props.name].filename
  );

  return (
    <Form.Control
      spellCheck="false"
      className="code-label"
      as="textarea"
      rows="1"
      onChange={e => {
        dispatch(filename(props.name, e.target.value));
      }}
    >
      {name}
    </Form.Control>
  );
};
