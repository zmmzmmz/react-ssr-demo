import React from 'react'
import Abs from './components/a'
const routers = [
  {
    path: '/a',
    component: () => <Abs/>
  },
  {
    path: '/b',
    component: () => <div>b - hah - b</div>
  },
  {
    path: '/c',
    component: () => <div>c - hah - c</div>
  }
]

module.exports = routers
