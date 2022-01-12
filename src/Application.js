import React, {Component} from "react";

class Application extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,         // user's clicks counter
            countdown: 15     // timer countdown in seconds
        }
        this.timer = setInterval(() => this.tick(), props.timeout || 1000);
    }

    handleClick = (clicked_id) => {
        if (this.state.countdown > 0) {
            this.setState({count: this.state.count +1});       // add 1 click to the user's clicks counter
            if (this.state.count < 2) {                        // hide all buttons after first click
              for (let i = 1; i < 10; i++) {
                document.getElementById(i).style.visibility = "hidden";
              }
            }
            else {
              document.getElementById(clicked_id).style.visibility = "hidden";    // hide only previous button after all the next clicks (to avoid excessive for loop every time) 
            }
            let NewId = Math.ceil(Math.random() * 9)    // random selection of the next button. The next button should be different from the previous one
            if ( NewId === clicked_id) {                // if the chosen random button is the same as the previous one, then choose the next one. 
              if (NewId === 9){                         // If the chosen button is number 9, then choose the button number 8. 
                NewId = 8;                              // All this to avoid the possibility of multiple consequential random number calculation
              }
              else {
                NewId += 1;
              }
            }
            document.getElementById(NewId).style.visibility = "visible"; // make the next chosen button visible
          }   
    }

    tick() {
        const current = this.state.countdown;
        this.setState({ countdown: current - 1 }); // clocks are ticking
      }

    render(){
        let {count} = this.state;
        if (this.state.countdown > 0) {  // if time is not out yet, render grid of buttons 3 by 3
            return (
            <div>
                <h1>You've clicked the button {count} times</h1>
                <h2>You have {this.state.countdown} seconds left</h2>
                <div class="grid-container">
                  <div class="item1"></div>
                  <div class="grid-item" id="1"><button onClick={() => this.handleClick(1)}>CLICK ME!</button></div>
                  <div class="grid-item" id="2"><button onClick={() => this.handleClick(2)}>CLICK ME!</button></div>
                  <div class="grid-item" id="3"><button onClick={() => this.handleClick(3)}>CLICK ME!</button></div>
                  <div class="grid-item" id="4"><button onClick={() => this.handleClick(4)}>CLICK ME!</button></div>
                  <div class="grid-item" id="5"><button onClick={() => this.handleClick(5)}>CLICK ME!</button></div>
                  <div class="grid-item" id="6"><button onClick={() => this.handleClick(6)}>CLICK ME!</button></div>
                  <div class="grid-item" id="7"><button onClick={() => this.handleClick(7)}>CLICK ME!</button></div>
                  <div class="grid-item" id="8"><button onClick={() => this.handleClick(8)}>CLICK ME!</button></div>
                  <div class="grid-item" id="9"><button onClick={() => this.handleClick(9)}>CLICK ME!</button></div>
                  <div class="item11"></div>
                </div>
            </div>
            );
        } else {                          // if time is out, render the table of records
            this.state.countdown = 0;
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = mm + '/' + dd + '/' + yyyy;
            return (
            <div>
                <h1>Your time is out! Your result is: {count} points</h1>

                <table class="center">
                  <tr>
                    <th>Place</th>
                    <th>Points</th>
                    <th>Date</th>
                  </tr>
                  <tr>
                    <td>1st</td>
                    <td>{count}</td>
                    <td>{today}</td>
                  </tr>
                </table>
                <div class="grid-item"><button onClick={() => window.location.reload()}>TRY AGAIN!</button></div>
            </div>       
        )}
    }
}

export default Application;