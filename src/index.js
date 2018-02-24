import React from 'react';
import ReactDOM from 'react-dom';
import Presentation from './Presentation';
import registerServiceWorker from './registerServiceWorker';
import './variables.css'

ReactDOM.render(<Presentation />, document.getElementById('root'));
registerServiceWorker();
