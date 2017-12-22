import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store/store'
import 'bootstrap/dist/css/bootstrap.css';
import history from './history';

const store = configureStore()

ReactDOM.render((
	<Provider store={store}>	
		<BrowserRouter history={history}>
			<App />
		</BrowserRouter>
	</Provider>
), document.getElementById('root'));
registerServiceWorker();