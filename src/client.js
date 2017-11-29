import React from 'react'
import App from './main'
import {BrowserRouter as Router} from 'react-router-dom'
import {hydrate} from 'react-dom'

hydrate((
  <Router>
    <App />
  </Router>
), document.getElementById('app'));
