import React, { Component } from 'react';
import { Panel } from '../panel/panel.component';
import './panel-list.styles.css'
import { Col, Form, Container} from 'react-bootstrap';

class PanelList extends Component{
    constructor(){
        super();

        this.state = {
            Html : '',
            Css: '',
            Js: ''
        }

    }

    componentDidMount () {
        window.onload = function(){
            document.getElementById("out").contentWindow.document.write('<html><head><style type="text/css"></style></head></body></body></html');

        }
    }

    componentDidUpdate () {
        var html = document.getElementById("out").contentWindow.document.getElementsByTagName('body')[0];
        html.innerHTML = this.state.Html;
        var css = document.getElementById("out").contentWindow.document.getElementsByTagName('style')[0];
        css.innerHTML = this.state.Css;
        try {
            document.getElementById("out").contentWindow.eval(this.state.Js);
        } catch {
            console.log("Javascript in process");
        }
    }


    render (){
      return(
        <Container>
            <Form.Row>
        {this.props.panels.map((panel, id) =>{
            return (

                    <Panel
                        display={this.props.display[id]}
                        name={panel}
                        key={id}
                        handleChange={e=>{
                            const Lang = panel
                            this.setState({[Lang]: e.target.value})
                            }}
                    >
                    </Panel>

                )

        })}
            <Col md className={this.props.display[3]}>
            <span className="langtitle">Output</span>
            <iframe id="out" title="output"></iframe>
            </Col>
            </Form.Row>
        </Container>

      );
    }
}

export default PanelList;

