import React, { Component } from 'react';
import { Panel } from '../panel/panel.component';
import './panel-list.styles.css'
import { Row, Col} from 'react-bootstrap';

class PanelList extends Component{
    constructor(){
        super();

        this.state = {
            Html : '',
            Css: '',
            Js: '',
            /*autocomplete: false,
            autostring: ''*/
        }

    }

    componentDidMount () {
            document.getElementById("out").contentWindow.document.write('<html><head><style type="text/css"></style></head></body></body></html');
    }

    outputUpdate = () => {

        var html = document.getElementById("out").contentWindow.document.getElementsByTagName('body')[0];
        console.log(html);
        html.innerHTML = this.state.Html;
        var css = document.getElementById("out").contentWindow.document.getElementsByTagName('style')[0];
        console.log(css);
        css.innerHTML = this.state.Css;
        try {
            document.getElementById("out").contentWindow.eval(this.state.Js);
        } catch {
            console.log("Javascript in process");
        }
    }

    typeUpdate = (letter, panel, e) =>{
        console.log("typeupdate");
        const Lang = panel
        this.setState({[Lang]: letter}, this.outputUpdate);

        /*
        if (letter === '<') {
            console.log("here");
            this.setState({autostring : '</', autocomplete: true});
            console.log("after");
        }else if(letter === '>'){
            let temp = this.setState.autostring;
            temp = temp + letter;
            this.setState({autostring: temp});
            this.setState({autocomplete: false});
            console.log(this.state.autostring);
        } else if (this.state.autocomplete) {
            let temp = this.setState.autostring;
            temp = temp + letter;

            this.setState({autostring: temp});

        } else {
            console.log('nothing');
        }*/
    }

    render (){
      return(
        <div className="panel_out">
            <Row noGutters="true" className="panels">

        {this.props.panels.map((panel, id) =>{
            return (

                    <Panel
                        display={this.props.display[id]}
                        name={panel}
                        key={id}
                        handleChange={this.typeUpdate}
                    >
                    </Panel>

                )

        })}
            <Col lg={true}>
            <iframe className={this.props.display[3]} id="out" title="output"></iframe>
            </Col>
            </Row>
        </div>

      );
    }
}

export default PanelList;

