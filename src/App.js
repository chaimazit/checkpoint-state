import {Component }from "react";
import Compteur from "./Compteur";
import "./App.css";
export class App extends Component {
  state = {
    shows: false,

  compteur:{
  fullName:"Chaima Zitouni",
                bio:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                profession:"ingeieure",
                imgSrc:"img",

  },
};

     toggleshows = () => this.setState({ shows: !this.state.shows });
    render() {
    return (
    <div className="App">
    <button className="btn" onClick={this.toggleshows}>
          Shows profile
        </button>
        {this.state.shows && <Compteur compteur={this.state.compteur} />}
  </div>

);
}
}

export default App;