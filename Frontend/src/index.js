import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './store/reducer/reducer'

//const middleware = routerMiddleware(browserHistory)

 const store=createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));

const app=(
          <Provider store={store}>
          <BrowserRouter>
          <App/> 
          </BrowserRouter>
          </Provider>
          );
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
