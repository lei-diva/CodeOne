import React, {Component} from 'react';
import PanelList from './components/panel-list/panel-list.component';
import { NavBar } from './components/navbar/navbar.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      panels: ['Html', 'Css', 'Js'],
      display: ['show', 'show', 'show'],
      files: ['index.html', 'style.css', 'script.js']
    }
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
    return (
      <div className="general">
      <NavBar
      panels={this.state.panels}
      change={this.changeDisplay}
      display={this.state.display}
      ></NavBar>
      <Container className="panellist">
        <PanelList
        panels={this.state.panels}
        display={this.state.display}
        ></PanelList>
      </Container>



      </div>
    );
  }
}

export default App;
