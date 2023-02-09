import React, { Component } from "react";
export class Compteur extends Component {
  state = {
    timer: 0,
  };
  componentDidMount = () => {
    this.intervalId = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  };

  render() {
    const { compteur } = this.props;
    const { fullName, imgSrc, profession, bio } = compteur;
    return (
      <div>
        <img
          src={imgSrc}
          alt="profile photo" />
        <h1> Name</h1>
        <p >{fullName}</p>
        <h2>Biographie </h2>
        <p>{bio}</p>
        <h3 > Profession </h3>
        <p>{profession}</p>
        <div>
          <h1>{this.state.timer}</h1>
        </div>
      </div>
    );
  }
}

export default Compteur;