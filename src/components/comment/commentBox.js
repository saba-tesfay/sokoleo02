import React, { Component } from 'react';
import CommentList from './commentList';
import CommentForm from './commentForm';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Carousel from "react-multi-carousel";
import {firestoreConnect} from 'react-redux-firebase';
import './commentStyle.css';
import {Redirect} from 'react-router-dom';
import {Link } from 'react-router-dom';
import commentIcon from '../img/comments_48px.png'
import messageIcon from '../img/message.png'
import likesIcon from '../img/likes.png';
import {addLike} from '../../store/actions/AddLikesaction'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
 const ImageFormatter=(props)=>{
  return(
    <img className="pr-2" src={props.src} alt={props.alt} width={30}/>
  )
}
 class commentBox extends Component {
   state={
     totalComment:-1,
     totalLike:-1,
     user:'',
     imageId:''
   }
   handleLike=(e)=>{
     this.state.totalLike++;
     this.props.addLike(e)
   }
   countLike=(like,imageId)=>{
    const likep = like.filter(item => item.likedProuductId === imageId);
    this.setState({totalLike : likep.length})
    console.log('totalLike', this.state.totalLike)
   }
   countComment=(comments,imageId)=>{
    const commentl = comments.filter(item => item.imageId === imageId);
    this.setState({totalComment : commentl.length})

   }
   
    render() { 
      const {uploadedPhoto,auth,comments,profile,imageId,like}=this.props;
      if(this.state.totalLike===-1){
        if(like){{this.countLike(like,imageId)}}       
      }
      if(this.state.totalComment===-1){
        if(comments){
          {this.countComment(comments,imageId)}
        }       
      }
      if(!auth.uid) return <Redirect to='/signin'/>
      if(uploadedPhoto||comments){
         if(uploadedPhoto){
         return (  
           <div className='row'>
             <div className='col-lg-3 col-sm-0'></div>
              <div className='col-lg-6 col-sm-12 ' >
                  <Carousel  autoPlay   responsive={responsive} showArrows={true}   showIndicators={true} showThumbs={false}>
              {uploadedPhoto.photo&&uploadedPhoto.photo.map((image,i)=>{
               return ( 
             
                <img class="img-fluid" src={image} alt="Colorlib Template"/>
             
               )
              })}
                 </Carousel>
                <div  className="d-flex flex-fill">
                    <Link to={'/comment/'+imageId} className="px-5 flex-fill font-weight-bold text-dark">
                      <button onClick={()=>this.handleLike(imageId)} style={{backgroundColor:'white',border:0}} className='p-0 m-0' >
                        <ImageFormatter src={likesIcon} alt="like icon"/>
                      </button>
                     {" "+this.state.totalLike+" "} 
                      <span className='text-dark'>like</span> 
                    </Link>
                    <Link to={'/comment/'+imageId} className="px-5 flex-fill font-weight-bold text-dark">
                      <ImageFormatter src={commentIcon} alt="comment icon" />
                      {" "+this.state.totalComment+" "}
                      comment
                    </Link>
                    <Link  to={'/chat/'+imageId} className="px-5 flex-fill font-weight-bold text-dark">
                       <ImageFormatter src={messageIcon} alt="chat icon" /> send message
                    </Link>
              </div>
                {  comments ?<div>
                  <h1>comments</h1>
                                 <CommentList comments={comments}  imageId={ imageId} total={this.state.totalComment} like={like}/>
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
     like:state.firestore.ordered.like,
     profile:state.firebase.profile
   }
 }
 const mapDispatchToProps=(dispatch)=>{
  return{
      addLike:(like)=>dispatch(addLike(like))
  }
}
 export default compose(
    connect(mapStateToProps,mapDispatchToProps),
   firestoreConnect([
      {collection:'sellerUpload'},
      {collection:'like'},
      {collection:'comments',orderBy: ['createdAt','asc']}
   ]))(commentBox);
