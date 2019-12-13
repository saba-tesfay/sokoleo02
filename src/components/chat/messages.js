import {Component} from "react";
import React from "react";
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
class Messages extends Component {
  renderMessage(message) {
    return (
      <li className='Messages-message currentMember'>
        <span className="avatar" style={{backgroundColor: '#49B84C'}}
        />
        <div className="Message-content">
          <div className="username">
             username
          </div>
          <div className="text " style={{backgroundColor: 'lightgreen'}}>
    {message.text}</div>
        </div>
      </li>
    );
  }
  render() {
    const {messages} = this.props;
    console.log('mesages',messages);
    return (
      <ul className="Messages-list">
        {messages && messages.map(m => this.renderMessage(m))}
      </ul>
    );
  }
}
const mapStateToProps=(state)=>{
  console.log('chatboxccccccccccc',state);
  return{
      messages:state.firestore.ordered.chatMessage
  }
}
export default  compose(connect(mapStateToProps),
firestoreConnect([{collection:'chatMessage'}]))(Messages);