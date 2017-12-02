import React, {Component} from 'react'
import {
  Link,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
// import {render} from 'react-dom'
import routers from './routers'
import Topbar from './components/Header'

const App = () => (
  <div>
    <Topbar/>
    <div style={{ display: 'flex' }}>
      <div style={{
        padding: '10px',
        width: '40%',
        background: '#f0f0f0'
      }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link to="/a">a</Link></li>
          <li><Link to="/b">b</Link></li>
          <li><Link to="/c">c</Link></li>
        </ul>
      </div>

      <div style={{ flex: 1, padding: '10px' }}>
        {
          routers.map((router, index) => (
            <Route key={index} path={router.path} exact={router.exact} component={router.component}/>
          ))
        }
      </div>
    </div>
  </div>
)

export default App
