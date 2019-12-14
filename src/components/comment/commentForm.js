import React, { Component } from "react";
import {connect } from 'react-redux';
import Send from '../img/play.png'
import {addComment} from '../../store/actions/addComment'
import Attach from '../img/attach.png'
import styled from 'styled-components';

export const Form = styled.form`
display: flex !important;  
`;
const Button=styled.button`
background-color: #49b84c;
border:0;
`;
 class CommentForm extends Component {
   state = {
      comment:''
        };
/**
   * Handle form input field changes & update the state
   */
  handleFieldChange = (event) => {
    this.setState({[event.target.id]:event.target.value})    
  };

  /**
   * Form submit handler
   */
  onSubmit=(event)=>{
    // prevent default form submission
    event.preventDefault();
    // console.log(this.state);
    this.props.addComment(this.state);
  }
  render() {
    return (
    <div className="Input pt-3 pl-4" style={{backgroundColor: '#49B84C'}}>
        <Form method="post Input" onSubmit={this.onSubmit}>
          <img src={Attach} height={40}/>
          <input
            style={{
              backgroundColor: '#3456ab',
              
            }}
            onChange={this.handleFieldChange}
              id="comment"
              className="form-control commendandchatinput"
              placeholder="Your Comment"
          />
              <Button> <img src={Send} height={40} /></Button>
           
        </Form>
      </div>
    );
  }
  }
  const mapDispatchToProps=(dispatch)=>{
    return{
        addComment:(comment)=>dispatch(addComment(comment))
    }
  }
 export default connect(null,mapDispatchToProps)(CommentForm);