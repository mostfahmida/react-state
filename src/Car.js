import React, { Component } from "react";
import img from "./image.jpg"
import './Car.css'


export default class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "MOSTFA HMIDA",
        bio: "WISH ME LUCK",
        img: 'img',
        profession: "STUDENT",
        shows: true,
        mountingTime: 0,
      },
    }
  }

  componentDidMount() {
    setInterval(()=>{
      this.setState({mountingTime:this.state.mountingTime+=0.5})
    },1000)
  }


  change=()=>{
    this.setState({shows:!this.state.shows})
    this.setState({mountingTime:0})}


  render() {
    return (
        <div className="card">
            {this.state.shows? <> <h2 style={{ color: "#408080" }}>Hello i'm : {this.state.Person.fullName}</h2>
            <h3 style={{ color: "bisque" }}>My bio is : {this.state.Person.bio}</h3>
            <h3 style={{ color: "bisque" }}>My last profession is : {this.state.Person.profession}</h3>
            <img src={img}className="photo"></img> </> : null}
            <h3>Time:{this.state.mountingTime}</h3>
            <button onClick={this.change}>show</button>
        </div>
    )
  }
}
