import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App 
                  applicationName={ "Students shopping list" }
                  applicationDescription= { "The best shopping list for students" } />,
                document.getElementById('root'));

serviceWorker.unregister();
