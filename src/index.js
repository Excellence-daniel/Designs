import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import { TryOuts } from './biometrics';
//import { ToDoList } from './todolist';
//import { Remit } from './remit';
//import { Fiksar } from './fiksar';
//import { Daily } from './daily';

import { GhostLamp } from './ghostlamp';




ReactDOM.render(<GhostLamp/>, document.getElementById('root'));
//ReactDOM.render(<Daily/>, document.getElementById('root'));
//ReactDOM.render(<Fiksar/>, document.getElementById('root'));
//ReactDOM.render(<Remit/>, document.getElementById('root'));
//ReactDOM.render(<TryOuts/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
