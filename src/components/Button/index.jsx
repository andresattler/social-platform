import React from 'react'

import style from './style.styl'

const Button = (props) =>
  <button className={style.button} {...props}>
    {props.children}
  </button>

export default Button
