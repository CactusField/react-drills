import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Image from "./Image";

class App extends Component{
  render(){
    return(
      <section className="App">
        <Image url={"https://www.gematsu.com/wp-content/uploads/2020/03/Demon-Slayer-Kimetsu-no-Yaiba-Mobile_03-22-20.jpg"} />
      </section>
    );
  }
}
export default App;
