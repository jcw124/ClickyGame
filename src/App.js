import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Tsums from "./components/Tsums";
import Footer from "./components/Footer";
import tsum from "./tsum.json";
import './App.css';

class App extends Component {
  state = {
    tsum,
    TsumClicked: [],
    score: 0
  }

  imageClick = event => {
    const currentTsum = event.target.alt;
    const TsumClicked =
      this.state.TsumClicked.indexOf(currentTsum) > -1;

      if (TsumClicked) {
        this.setState({
          tsum : this.state.tsum.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
         TsumClicked: [],
          score: 0
        });
          alert("You Clicked the same Tsum Tsum Twice! Want to Play again?");
  
        } else {
          this.setState(
            {
              tsum : this.state.tsum.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              TsumClicked: this.state.TsumClicked.concat(
                currentTsum
              ),
              score: this.state.score + 1
            },

            () => {
              if (this.state.score === 15) {
                alert("You Clicked All the Tsum Tsums without clicking any twice! Winner Winner Chicken Dinner!");
                this.setState({
                  fish: this.state.tsum.sort(function(a, b) {
                    return 0.5 - Math.random();
                  }),
                  TsumClicked: [],
                  score: 0
                });
              }
            }
          );
        }
      };


  render() {
    return (

    <div>
     
      <Jumbotron />
      <Navbar 
        score={this.state.score}
      />
      <div className="wrapper" >
        {this.state.tsum.map(tsum => (
          <Tsums
            imageClick={this.imageClick}
            id={tsum.id}
            key={tsum.id}
            image={tsum.image}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
}
export default App;