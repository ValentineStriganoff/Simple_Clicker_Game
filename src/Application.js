import React, {Component} from "react";

class Application extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            countdown: 15
        }
        this.timer = setInterval(() => this.tick(), props.timeout || 1000);
    }

    handleClick = (clicked_id) => {
        if (this.state.countdown > 0) {
            this.setState({count: this.state.count +1});
            for (let i = 1; i < 10; i++) {
              document.getElementById(i).style.visibility = "hidden";
            }
            let NewId = Math.ceil(Math.random() * 9)
            if ( NewId === clicked_id) {
              if (NewId === 9){
                NewId = 8;
              }
              else {
                NewId += 1;
              }
            }
            document.getElementById(NewId).style.visibility = "visible";
          }   
    }

    tick() {
        const current = this.state.countdown;
        this.setState({ countdown: current - 1 }); 
      }

    render(){
        let {count} = this.state;
        if (this.state.countdown > 0) { 
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
            </div>);
        } else {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = mm + '/' + dd + '/' + yyyy;
            return (
            <div>
                <h1>Your time is out! Your result is: {count} times</h1>

                <table class="center">
                  <tr>
                    <th>Place</th>
                    <th>Record</th>
                    <th>Date</th>
                  </tr>
                  <tr>
                    <td>1st</td>
                    <td>{count} times</td>
                    <td>{today}</td>
                  </tr>
                </table>
                <div class="grid-item"><button onClick={() => window.location.reload()}>TRY AGAIN!</button></div>
            </div>       
        )}
    }


}

export default Application;