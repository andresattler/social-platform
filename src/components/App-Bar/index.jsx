import React from 'react'

import Button from '../Button'
import Drawer from '../Drawer'


import style from './style.styl'

class AppBar extends React.Component {
  constructor() {
    super()
    this.state = {
      showDrawer: false
    }
  
  } 
  render() {
    return (
      <React.Fragment >
        <header className={style.appBar}>
          <div className={style.group}>
            <Button 
              onClick={() => this.setState({ showDrawer: true })}
              >
                Menu
            </Button>
          </div>
          <Button onClick={() => console.log('login')}>LogIn</Button>
        </header>
        { this.state.showDrawer && <Drawer onClose={() => this.setState({ showDrawer: false })} /> }
    </React.Fragment>
    )
  }
}

export default AppBar
