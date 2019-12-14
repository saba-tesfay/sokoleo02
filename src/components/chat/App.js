import React, { Component } from 'react';
import Messages from './messages'
import Input from "./Input";
import './App.css'
import messageIcon from '../img/message.png'
import likesIcon from '../img/likes.png'
import commentIcon from '../img/comments_48px.png'
import {Link} from 'react-router-dom'
import Fruit from '../img/bg_1.jpg'
const ImageFormatter=(props)=>{
  return(
    <img className="pr-2" src={props.src} alt={props.alt} width={30}/>
  )
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
                username: "me",
                cn:' currentMember'
              }
            }
          ],
          member: {
            username: 'you',
            color: '#B2D5B4',
            cn:'Messages-message'
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
            <div className="d-flex flex-row ">
            <p className="px-5 flex-fill font-weight-bold">
               <ImageFormatter src={likesIcon} alt="comment"/>
               like</p>
            <Link to='/comment' className="px-5 flex-fill font-weight-bold text-dark">
              <ImageFormatter src={commentIcon} alt="comment" />
              {/* {comments.length} */}
             {/* { comments.length}:2?0 */}
               comment
            </Link>
            <Link  to='/chat'className="px-5 flex-fill font-weight-bold text-dark">
            <ImageFormatter src={messageIcon} alt="comment" />             
              send message</Link>
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