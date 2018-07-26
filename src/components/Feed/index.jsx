import React from 'react'

import Button from '../Button'
import Cammera from '../Cammera'

import style from './style.styl'

class Feed extends React.Component {
  constructor() {
    super()
    this.state = {
      showCammera: false,
      images: []
    }
  }
  render() {
    return (
      <React.Fragment>
        <h1>Social Platform comes here </h1>
        { this.state.images.map((src, i) =>
          <img key={i} className={style.image} src={src} />)
        }
        <Button
          className={style.addButton}
          onClick={() => this.setState({ showCammera: true})}
        >
          +
        </Button>
        {this.state.showCammera &&
         <Cammera 
           pushImage={(url) => this.setState({ images: [...this.state.images, url] })}
           onClose={() => this.setState({ showCammera: false })}
         />}
      </React.Fragment>
    )
  }
}

export default Feed
