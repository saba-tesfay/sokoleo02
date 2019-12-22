import React, { Component } from 'react';
import Messages from './messages'
import Input from "./Input";
import './App.css'
import messageIcon from '../img/message.png'
import likesIcon from '../img/likes.png'
import commentIcon from '../img/comments_48px.png'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { addChatMessage} from '../../store/actions/chatAction'
import {Redirect} from 'react-router-dom'
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import FbImageLibrary from 'react-fb-image-grid'
const ImageFormatter=(props)=>{
  return(
    <img className="pr-2" src={props.src} alt={props.alt} width={30}/>
  )
}

class App extends Component {
     render() {
       const { auth,imageId,uploadedPhoto,profile,chatMessage}=this.props;
       console.log('chated',chatMessage)
       if(!auth.uid) return <Redirect to='/signin'/>
       if(uploadedPhoto){
        return (  
          <div className='row'>
            <div className='col-lg-3 col-sm-0'></div>
             <div className='col-lg-6 col-sm-12 ' >
                <FbImageLibrary classname="img-fluid" images={uploadedPhoto.photo} countFrom={2}/>
               <div  className="d-flex flex-fill">
                   <Link to={'/comment/'+imageId} className="px-5 flex-fill font-weight-bold">
                     <ImageFormatter src={likesIcon} alt="comment"/>like
                   </Link>
                   <Link to={'/comment/'+imageId} className="px-5 flex-fill font-weight-bold text-dark">
                     <ImageFormatter src={commentIcon} alt="comment" />comment
                   </Link>
                   <Link  to={'/chat/'+imageId} className="px-5 flex-fill font-weight-bold text-dark">
                      <ImageFormatter src={messageIcon} alt="comment" /> send message
                   </Link>
               </div>
               <div className="App">
            <Messages messages={chatMessage} />
            <Input  />
          </div>
             </div>
             <div className='col-lg-3 col-sm-0'></div>
           </div>
              );}
          else {
           return (
             <div className="container center">
               <p>Loading photos...</p>
             </div>
           )
         } 
      }
}
 
const mapStateToProps=(state,ownProps)=>{
  console.log('chat app',state)
  const id=ownProps.match.params.id;
  const uPhoto=state.firestore.data.sellerUpload;
  const UPhoto=uPhoto?uPhoto[id]:null
  return{
    imageId:id,
    uploadedPhoto:UPhoto,
    auth:state.firebase.auth,
    chatMessage:state.firestore.ordered.chat,
    profile:state.firebase.profile,
  }
} 
export default compose(
  connect(mapStateToProps),
 firestoreConnect([
    {collection:'sellerUpload'},
    {collection:'chat' ,orderBy: ['createdAt','asc']}
 ]))(App);