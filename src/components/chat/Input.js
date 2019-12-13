import {Component} from "react";
import React from "react";

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
    this.props.onSendMessage(this.state.text);
  }
  render() {
    return (
      <div className="Input p-3 " style={{backgroundColor: '#49B84C'}}>
        <form onSubmit={e => this.onSubmit(e)} className="py-0">
          <input
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Type your message...."
            autofocus="true"
          />
          <button> ➤</button>
        </form>
      </div>
    );
  }
}

export default Input;