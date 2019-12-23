import React from 'react';
import {Link} from 'react-router-dom'
import Comment from "./Comment";
import commentIcon from '../img/comments_48px.png'
import messageIcon from '../img/message.png'
import likesIcon from '../img/likes.png'

const commentList=({comments,imageId})=>{ 
    return (
        <div className="commentList">
          { comments && comments.map((comment)=>(
              <Comment comment={comment} key={comment.id} imageId={imageId}/>
            ))}
          
        </div>
      );
}
export default commentList;
