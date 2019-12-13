import {Component} from "react";
import React from "react";
import {connect } from 'react-redux'
import {addMessage} from '../../store/actions/chatAction'
class Input extends Component {
  state = {
    text: ""
  }
  onChange(e) {
    this.setState({text: e.target.value});
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({text: ""});
    this.props.addMessage(this.state)
  }
  render() {
    console.log('FFFFFFFFFFFFF',this.state);
    return (
      <div className="Input p-3 " style={{backgroundColor: '#49B84C'}}>
        <form onSubmit={e => this.onSubmit(e)} className="py-0">
          <input
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Type your message...."
          />
          <button> ➤</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
      addMessage:(message)=>dispatch(addMessage(message))
  }
  //what we done here is we add addMessage to this componenet as prop
  //then 
}
export default connect(null,mapDispatchToProps)(Input);