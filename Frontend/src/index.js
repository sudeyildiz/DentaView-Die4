import React from 'react';
import ReactDOM from 'react-dom/client';
import './design/index.css';
import App from './javascript/App';
import reportWebVitals from './javascript/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();


/*import React from 'react';
import ReactDOM from 'react-dom';
import './design/index.css';
import App from './javascript/App';
import reportWebVitals from './javascript/reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();*/
