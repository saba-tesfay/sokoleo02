import React from "react";
import Img from '../../images/about.jpg'
import './commentStyle.css'
export default function Comment(props) {
  const { msg , comment } = props.comment;
  console.log("commenettttttttt",props)
  const author='Jone Man'

  return (
    <div className="media mb-4">
      <img style={{borderRadius:50}}
        className=" bg-light "
        width="48"
        height="48"
        src={Img }
        alt={author}
      />

      <div className="media-body px-2 shadow-sm rounded bg-white  ">
        <div className="d-flex flex-row bd-highlight   p-1">
            <p className="   font-weight-bold pr-2">{author}</p>
             < p className=" font-weight-bold  textDays" > . 2 days ago</p>  
             {/* {moment(project.createrAt.toDate()).calendar()}          */}
        </div>  
        <div className='  '>{comment}</div>    
        
      </div>
    </div>
  );
}