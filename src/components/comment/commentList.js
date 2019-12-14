import React from 'react';
import {Link} from 'react-router-dom'
import Comment from "./Comment";
import commentIcon from '../img/comments_48px.png'
import messageIcon from '../img/message.png'
import likesIcon from '../img/likes.png'
import Fruit from '../img/bg_1.jpg'
const ImageFormatter=(props)=>{
  return(
    <img className="pr-2" src={props.src} alt={props.alt} width={30}/>
  )
}
const commentList=({comments})=>{
  // comments.Object.keys(comments).length
  console.log('commentss list',comments);
    return (
        <div className="commentList">
          <div class="hero-wrap hero-bread"  style ={{ backgroundImage:`url(${Fruit})`}}>
            <div class="container">
              <div class="row no-gutters slider-text align-items-center justify-content-center">
                  <div class="col-md-9 ftco-animate text-center">
                  <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home</a></span> <span>Products</span></p>
                  <h1 class="mb-0 bread">Products</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row ">
            <p className="px-5 flex-fill font-weight-bold">
               <ImageFormatter src={likesIcon} alt="comment"/>
               like</p>
            <Link to='/comment' className="px-5 flex-fill font-weight-bold text-dark">
              <ImageFormatter src={commentIcon} alt="comment" />
              {/* {comments.length} */}
             {/* { comments.length}:2?0 */}
               comment
            </Link>
            <Link  to='/chat'className="px-5 flex-fill font-weight-bold text-dark">
            <ImageFormatter src={messageIcon} alt="comment" />             
              send message</Link>
          </div>
          {/* <h4 className="mb-4 font-weight-bold">
        Comment{comments.length > 0 ? "s" : ""}
      </h4> */}
      {comments=== 0  ? (
        <div className="alert text-center alert-info">
          Be the first to comment
        </div>
      ) : null}
        { comments && comments.map((comment)=>(
            <Comment comment={comment} key={comment.id}/>
          ))}
        </div>
      );
}
export default commentList;
