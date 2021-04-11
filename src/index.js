import React,{Suspense} from 'react';
import reactDOM from 'react-dom';

import App from './App';
import './assets/main.css'
import 'antd/dist/antd.css';

reactDOM.render(
  <Suspense fallback={(<div>~~~~~~</div>)}>
    <App />
</Suspense>,document.getElementById('root'))

