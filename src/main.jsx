import React from 'react'
import ReactDOM from 'react-dom/client'
//import {App} from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import { AppRoutes } from './AppRoutes.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
)
