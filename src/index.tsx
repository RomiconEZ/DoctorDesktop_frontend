import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import {BrowserRouter} from "react-router-dom";
import LoginClass from "./store/LoginClass";

interface State { // нужно прописать все поля контекста
    login: LoginClass,
}

const store = setupStore();
export const login = new LoginClass();
export const Context = createContext<State>({
    login,
})

ReactDOM.render(
    <Provider store={store}>
        <Context.Provider value={{
            login
        }}>
        <App />
        </Context.Provider>,
    </Provider>,
  document.getElementById('root')
);

