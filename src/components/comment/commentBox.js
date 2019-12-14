import React, { Component } from 'react';
import CommentList from './commentList'
import CommentForm from './commentForm'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import './commentStyle.css'
 class commentBox extends Component {
    render() { 
      //  console.log(this.props);
      const {comments}=this.props;
      console.log('comments from commentbox',comments)
       return (  
            <div>
               <CommentList comments={comments}/>
               <CommentForm/>
            </div>
       
         );
    }
 }
  
 const mapStateToProps=(state)=>{
   console.log("state from comment box",state);
   return{
     comments:state.firestore.ordered.haha
   }
 }
 export default compose(connect(mapStateToProps),
 firestoreConnect([{collection:'haha'}]))(commentBox);