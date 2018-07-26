import React from 'react'

import style from './style.styl'

const Drawer = (props) =>
  <div className={style.wrapper}>
    <nav className={style.nav}>
      navigation
    </nav>
    <div onClick={props.onClose} className={style.backdrop} />
  </div>

  export default Drawer
