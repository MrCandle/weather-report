import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// TODO: This import is not working without brackets.
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render((
	<BrowserRouter>
		<App />
	</BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();