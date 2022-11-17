import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import * as serviceWorkerRegistration from './components/UI/DWV/serviceWorkerRegistration'


const store = setupStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();


