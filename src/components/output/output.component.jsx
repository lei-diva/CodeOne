import React, { useEffect } from "react";
import "./output.css";
import { useSelector } from "react-redux";
import { Col, Form } from "react-bootstrap";

export const Output = () => {
  const { Html, Css, Js } = useSelector(state => state.playground.panels);
  const htmlContent = Html.content;
  const cssContent = Css.content;
  const jsContent = Js.content;
  console.log(htmlContent);

  console.log(Html);

  useEffect(() => {
    document
      .getElementById("out")
      .contentWindow.document.write(
        '<html><head><style type="text/css"></style></head><body></body></html'
      );
    outputUpdate();
  }, [Html, Css, Js]);

  const outputUpdate = () => {
    var html = document
      .getElementById("out")
      .contentWindow.document.getElementsByTagName("body")[0];
    html.innerHTML = htmlContent;
    var css = document
      .getElementById("out")
      .contentWindow.document.getElementsByTagName("style")[0];
    css.innerHTML = cssContent;
    try {
      document.getElementById("out").contentWindow.eval(jsContent);
    } catch {
      console.log("Javascript in process");
    }
  };

  return (
    <Col lg={true}>
      <Form.Control
        className="code-label out-label"
        plaintext
        readOnly
        defaultValue="Output"
      ></Form.Control>
      <iframe id="out" title="output"></iframe>
    </Col>
  );
};
