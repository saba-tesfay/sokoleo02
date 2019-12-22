import {Component} from "react";
import React from "react";
class Messages extends Component {
  renderMessage(message) {
    const {userType, text} = message;
    const seller='seller'
  if(seller.localeCompare(userType) ){
    return (
      <li className='Messages-message currentMember'>
        <span className="avatar" style={{backgroundColor: '#49B84C'}}
        />
        <div className="Message-content">
          <div className="username">
            {/* {username} */}
          </div>
          <div className="text "  >{text}</div>
        </div>
      </li>
    );
  }
  else{
    return (
      <li className= 'Messages-message buyyer '>
        <span className="avatar" style={{backgroundColor: '#49B84C'}}
        />
        <div className="Message-content">
          <div className="username">
          </div>
          <div className="text "  >{text}</div>
        </div>
      </li>
    );
  }

  }
  render() {
    const {messages} = this.props;
    return (
      <ul className="Messages-list">
        {messages&&messages.map(m => this.renderMessage(m))}
      </ul>
    );
  }
}

export default Messages;