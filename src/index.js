import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {AppContainer} from 'react-hot-loader';


const renderApp = () => {
    console.log('Je rends App');
    ReactDOM.render(<AppContainer><App/></AppContainer>, document.getElementById('root'));
}

if (module.hot) {
    module.hot.accept('./components/App', renderApp)
}

renderApp()