import React, { Component } from 'react';
import Messages from './messages'
import Input from "./Input";
import './App.css'
import Fruit from '../img/bg_1.jpg';
 
  
class App extends Component {
  onSendMessage = (message) => {
    const messages = this.state.messages
    // messages.push({
    //   text: message,
    //   member: this.state.member
    // })
    // this.setState({messages: messages})
    console.log('fffffffffffffffffff',message)
    this.props.addMessage(message);
  }
    state = { 
        messages: [
            {
              text: "This is a test message!",
              member: {
                color: "#51CB7A",
                username: "bluemoon"
              }
            }
          ],
          member: {
            username: 'me',
            color: '#B2D5B4'
          }
     }
     render() {
      //  console.log('sddddddddddddddddd',messages)
      //  const {message}=this.props;
        return (
          <div className="App">
            <div class="hero-wrap hero-bread"  style ={{ backgroundImage:`url(${Fruit})`}}>
              <div class="container">
                <div class="row no-gutters slider-text align-items-center justify-content-center">
                  <div class="col-md-9 ftco-animate text-center">
                  <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home</a></span> <span>Products</span></p>
                  <h1 class="mb-0 bread">Products</h1>
                  </div>
                </div>
              </div>
            </div>
            <Messages
              messages={this.state.messages}
              currentMember={this.state.member}
            />
            <Input
            />
          </div>
        );
      }
}

 
 
export default  App;