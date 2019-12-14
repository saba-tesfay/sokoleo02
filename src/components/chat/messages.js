import {Component} from "react";
import React from "react";
class Messages extends Component {
  renderMessage(message) {
    const {member, text} = message;
    const {currentMember} = this.props;
    
    return (
      <li className={member.cn}>
        <span className="avatar" style={{backgroundColor: '#49B84C'}}
        />
        <div className="Message-content">
          <div className="username">
            {member.username}
          </div>
          <div className="text " style={{backgroundColor: member.color}}>{text}</div>
        </div>
      </li>
    );
  }
  render() {
    const {messages} = this.props;
    return (
      <ul className="Messages-list">
        {messages.map(m => this.renderMessage(m))}
      </ul>
    );
  }
}

export default Messages;