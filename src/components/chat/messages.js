import {Component} from "react";
import React from "react";
class Messages extends Component {
  renderMessage(message,displayedImageId,productOwner) {
    const {userType, text,imageId,reciever,sender} = message;
    console.log('sender',sender)
    console.log('Reciever',reciever)
    console.log('productOwner',productOwner)
    const seller='seller';
    // get the uid of the signined up user and check if he writes amessage to this prouduct
    console.log('messsages nnnnnnnnnn',userType);

  if(!seller.localeCompare(userType) ){
    if(!displayedImageId.localeCompare(imageId) ){ 
    return (
      <li className=' seller Messages-message currentMember'>
        <span className="avatar" style={{backgroundColor: '#49B84C'}}
        />
        <div className="Message-content">
          <div className="username">
          </div>
          <div className="text "  >{text}</div>
        </div>
      </li>
    );}
    else{ return null}
  
  }
  else{
    if(!displayedImageId.localeCompare(imageId) ){
      if(!productOwner.localeCompare(reciever)){
        return (
          <li className= 'Messages-message Buyer '>
            <span className="avatar" style={{backgroundColor: '#49B84C'}}
            />
            <div className="Message-content">
              <div className="username">
              </div>
              <div className="text "  >{text}</div>
            </div>
          </li>
        );
      }else {return null}
     
     }
    else{
      return null
    }
   
  }

  }
  render() {
    const {messages,displayedImageId,productOwner} = this.props;
    console.log('messsages',messages);
    // console.log('messsages',displayedImageId);
    console.log('messsagesproduct ',productOwner);
    return (
      <ul className="Messages-list">
        {messages&&messages.map(m => this.renderMessage(m,displayedImageId,productOwner))}
      </ul>
    );
  }
}
export default Messages;