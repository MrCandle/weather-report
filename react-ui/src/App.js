import React, { Component } from 'react';
import Header from './Header'
import Main from './Main'
import 'react-select/dist/react-select.css';

class App extends Component {
  render() {
    return (
			<div className="App">
				<Header />
				<Main />
			</div>
    );
  }
}

export default App;

