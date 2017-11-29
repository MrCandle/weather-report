import React, { Component } from 'react';
import Main from './Main'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          {/* <Header /> */}
          <Main />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

