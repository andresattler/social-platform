import React from 'react'

import Button from '../Button'

import style from './style.styl'

class Cammera extends React.Component {
  constructor() {
    super()
    this.takePicture = this.takePicture.bind(this)
  }
  componentDidMount() {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then(stream => {
        this.video.srcObject = stream
      })
  }

  takePicture() {
    this.canvas.width = this.video.videoWidth
    this.canvas.height = this.video.videoHeight
    this.canvas.getContext('2d')
      .drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height)
    const url = this.canvas.toDataURL('image/jpg')
    this.props.pushImage(url)
    this.props.onClose()
  }
  render() {
    return (
      <div className={style.wrapper}>
        <video
          className={style.video}
          autoPlay
          ref={node => this.video = node}
        />
        <div className={style.controls}>
          <Button onClick={this.props.onClose}>
            Back
          </Button>
          <Button
            className={style.triggerButton}
            onClick={this.takePicture}
          />
          <Button onClick={this.props.onClose}>
            Settings
          </Button>
        </div>
        <canvas
          className={style.canvas}
          ref={node => this.canvas = node}
        />
      </div>
    )
  }
}

export default Cammera
