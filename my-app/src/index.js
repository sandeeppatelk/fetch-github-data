import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const userData = {
    name: "Joe",
    hobbies: [
        "reading",
        "computer games",
        "driving"
    ]
};

ReactDOM.render(<App user={userData}/>, document.getElementById('root'));
registerServiceWorker();
