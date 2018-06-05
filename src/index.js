import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from '../src/components/ScrollToTop/ScrollToTop.js';

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
     <Provider store={store}>
        <BrowserRouter store={store}>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
// registerServiceWorker();
