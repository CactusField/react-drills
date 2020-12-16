import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component{
  constructor(){
    super();

    this.state = {
      brands: ["Nike", "Adidas", "Apple", "Dell", "Microsoft"]
    };
  }

  render() {
    const brandsDisplayed = this.state.brands.map((e, i) => {
      return <h2 key={i}>{e}</h2>;
    });

    return <div className="App">{brandsDisplayed}</div>;
  }
}
export default App;