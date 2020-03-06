import React, {Component} from 'react';
import PanelList from './components/panel-list/panel-list.component'


class App extends Component {
  constructor () {
    super();

    this.state = {
      panels: ['Html', 'Css', 'Js']
    }
  }

  render () {
    return (
      <PanelList panels={this.state.panels}></PanelList>
    );
  }
}

export default App;
