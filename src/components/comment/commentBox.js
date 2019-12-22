import React, { Component } from 'react';
import CommentList from './commentList';
import CommentForm from './commentForm';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import './commentStyle.css';
import FbImageLibrary from 'react-fb-image-grid'
import {Redirect} from 'react-router-dom';
import {Link } from 'react-router-dom';
import commentIcon from '../img/comments_48px.png'
import messageIcon from '../img/message.png'
import likesIcon from '../img/likes.png';
const ImageFormatter=(props)=>{
  return(
    <img className="pr-2" src={props.src} alt={props.alt} width={30}/>
  )
}
 class commentBox extends Component {
    render() { 
      const {uploadedPhoto,auth,comments,profile,imageId}=this.props;
      console.log('phtoid',imageId);
      if(!auth.uid) return <Redirect to='/signin'/>
      if(uploadedPhoto||comments){
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
                {  comments ?<div>
                                  <h1>comments</h1>
                                  {console.log('comments',comments)}
                                 <CommentList comments={comments}  imageId={ imageId}/>
                                 <CommentForm profile={ profile } imageId={ imageId}/>
                            </div>
                            :<p>Loading comments</p>}
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
      else {
         return (
           <div className="container center">
             <p>Loading photo and comments...</p>
           </div>
         )
       }     
    }
 }
  
 const mapStateToProps=(state,ownProps)=>{
   const id=ownProps.match.params.id;
   const commentss=state.firestore.data.sellerUpload;
   const comment=commentss?commentss[id]:null
   return{
     imageId:id,
      uploadedPhoto:comment,
      auth:state.firebase.auth,
     comments:state.firestore.ordered.comments,
     profile:state.firebase.profile
   }
 }
 export default compose(
    connect(mapStateToProps),
   firestoreConnect([
      {collection:'sellerUpload'},
      {collection:'comments',orderBy: ['createdAt','asc']}
   ]))(commentBox);
