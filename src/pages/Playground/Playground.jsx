import React, {Component} from 'react';
import PanelList from '../../components/panel-list/panel-list.component';
import { NavBar } from '../../components/navbar/navbar.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './Playground.css';
import {withRouter} from 'react-router-dom';
import {addCollectionandDocuments} from '../../firebase/firebase.utils';

class Playground extends Component {
  constructor(props) {
    super(props);

    this.state = {
      panels: ['Html', 'Css', 'Js'],
      display: ['show', 'show', 'show'],
      projectname: '',
      content: {
        Html: '',
        Css: '',
        Js: ''
      }


    }
  }

  componentWillMount(){
    try {
      this.setState({content: this.props.location.state.content, projectname: this.props.location.state.projectname});
    } catch (error) {
      console.log('New project');
    }

  }

  changeProjectName = (e) => {
    this.setState({projectname: e.target.value});
  }

  changeDisplay = (id, e) =>{
    let display_status = this.state.display[id];
    let display_copy = this.state.display;

    if (display_status === "show") {
      display_copy[id] = "hide";
      this.setState({display: display_copy});
    }
    else {
      display_copy[id] = "show";
      this.setState({display: display_copy});
    }
  }


  render () {
    let home = '/'

    if (this.props.currentUser)
       home = '/profile';


    return (
      <div className="general">
      <NavBar
      panels={this.state.panels}
      change={this.changeDisplay}
      display={this.state.display}
      project={this.changeProjectName}
      projectname={this.state.projectname}
      homepath={home}
      ></NavBar>
      <Container className="panellist">
        <PanelList
        userRef={this.props.userRef}
        panels={this.state.panels}
        display={this.state.display}
        content={this.state.content}
        projectname={this.state.projectname}
        currentUser={this.props.currentUser}
        ></PanelList>
      </Container>



      </div>
    );
  }
}

export default withRouter(Playground);
