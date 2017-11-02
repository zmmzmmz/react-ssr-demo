import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'

import './styles/app.scss'

const Index = () => (
  <div>
    Home
  </div>
)

const Hello = () => (
  <div className="hello text-red">
    hello 你好 hola
  </div>
)

const World = () => (
  <div>
    world 世界
  </div>
)

const Home = () => (
  <Router>
    <p>
      <Link to="/hello">Hello</Link>
      <Link to="/world">world</Link>
    </p>
    <Route exact={true} path="/" component={Index} />
    <Route exact={true} path="/hello" component={Hello} />
    <Route exact={true} path="/world" component={World} />
  </Router>
)

ReactDOM.render(
  <Router>
    <div className="main">
      <p>
        <Link to="/hello">Hello</Link>
        <Link to="/world">world</Link>
      </p>
      <Route exact={true} path="/" component={Index} />
      <Route exact={true} path="/hello" component={Hello} />
      <Route exact={true} path="/world" component={World} />
    </div>
  </Router>,
  document.getElementById('app')
)


