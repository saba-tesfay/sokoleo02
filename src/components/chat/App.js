import React, { Component } from 'react';
import Messages from './messages'
import Input from "./Input";
import './App.css'
import Fruit from '../img/bg_1.jpg'
function randomName() {
    const adjectives = ["autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark", "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter", "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue", "billowing", "broken", "cold", "damp", "falling", "frosty", "green", "long", "late", "lingering", "bold", "little", "morning", "muddy", "old", "red", "rough", "still", "small", "sparkling", "throbbing", "shy", "wandering", "withered", "wild", "black", "young", "holy", "solitary", "fragrant", "aged", "snowy", "proud", "floral", "restless", "divine", "polished", "ancient", "purple", "lively", "nameless"];
    const nouns = ["waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning", "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter", "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook", "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly", "feather", "grass", "haze", "mountain", "night", "pond", "darkness", "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder", "violet", "water", "wildflower", "wave", "water", "resonance", "sun", "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper", "frog", "smoke", "star"];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return adjective + noun;
  }
  
  function randomColor() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  }
class App extends Component {
  onSendMessage = (message) => {
    const messages = this.state.messages
    messages.push({
      text: message,
      member: this.state.member
    })
    this.setState({messages: messages})
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
            username: randomName(),
            color: '#B2D5B4'
          }
          
     }
     render() {
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
              onSendMessage={this.onSendMessage}
            />
          </div>
        );
      }
}
 
export default App;