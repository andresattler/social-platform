import React from 'react'

import AppBar from './components/App-Bar'
import Feed from './components/Feed'


import style from './style.styl'

const App = () =>
  <div className={style.container}>
    <AppBar />
    <Feed />
  </div>

export default App
