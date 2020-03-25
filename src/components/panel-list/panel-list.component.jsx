import React, { Component } from 'react';
import { Panel } from '../panel/panel.component';
import './panel-list.styles.css'
import { Row, Col, Alert } from 'react-bootstrap';
import ExportButton from '../export-button/export-button.component';
import SaveIcon from '../../images/save.png';
import ProfileIcon from '../../images/profile.png';
import {withRouter} from 'react-router-dom';


class PanelList extends Component{
    constructor(props){
        super(props);

        this.state = {
            Html : this.props.content.Html,
            Css: this.props.content.Css,
            Js: this.props.content.Js,
            file_names: ['index.html', 'styles.css', 'script.js']
        }

    }

    componentDidMount () {
            document.getElementById("out").contentWindow.document.write('<html><head><style type="text/css"></style></head><body></body></html');
            this.outputUpdate();
    }


  updateProject = () => {
    console.log(this.props.userRef);
    console.log(this.props.projectname)

    if (!this.props.projectname){
        alert("Missing project title");
        return;
    }
    this.props.userRef.collection('projects').doc(this.props.projectname).set({
      Html: this.state.Html,
      Css: this.state.Css,
      Js: this.state.Js,
      date: new Date()
    })
    .then(<Alert key="1" variant="success">Saved</Alert>
  )
    .catch( (error)=> {
      console.log(error);
    });

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
        const Lang = panel
        this.setState({[Lang]: letter}, this.outputUpdate);

    }

    fileUpdate= (letter, id, e) => {
        console.log(e.target.value);
        let new_file_names = this.state.file_names;
        new_file_names[id] = letter;
        console.log(new_file_names);
        this.setState({file_names: new_file_names});
}

    render (){


      return(
          <div className="playground">
        <div className="panel_out">

            <Row noGutters="true" className="panels">

        {this.props.panels.map((panel, id) =>{
            return (
                    <Panel
                        display={this.props.display[id]}
                        name={panel}
                        key={id}
                        id={id}
                        handleChange={this.typeUpdate}
                        file={this.state.file_names[id]}
                        fileChange={this.fileUpdate}
                        content={this.state[panel]}
                    >
                    </Panel>

                )

        })}
            <Col lg={true}>
            <iframe className={this.props.display[3]} id="out" title="output"></iframe>
            </Col>
            </Row>
        </div>
        <ExportButton className="export_button"
        file_names={this.state.file_names}
        html={this.state.Html}
        css={this.state.Css}
        js={this.state.Js}/>
         {
        this.props.currentUser?(
        <div>
        <button className="save_button" onClick={this.updateProject}>
            <img className="save_icon" src={SaveIcon}/>
        </button>
        <button className="save_button user_button" onClick={()=> this.props.history.push('/profile')}>
        <img className="save_icon" src={ProfileIcon}/>
    </button>
    </div>
        )
        :
        null
         }
        </div>

      );
    }
}

export default withRouter(PanelList);

