import React from "react";
import { Panel } from "../panel/panel.component";
import { Output } from "../output/output.component";
import "./panel-list.styles.css";
import { Row } from "react-bootstrap";

import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

const PanelList = () => {
  const panels = useSelector(state => state.playground.panels);

  return (
    <Row noGutters="true" className="panels">
      {Object.keys(panels).map((panel, id) => (
        <Panel name={panel} key={id} />
      ))}

      <Output />
    </Row>
  );
};

export default withRouter(PanelList);
