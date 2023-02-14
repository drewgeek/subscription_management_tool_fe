import React from "react";
import CardImage from '../../Asset/blogCardImage.png';
import overlay from '../../Asset/Overlay2.png'
import "./Blog.css";

function BlogCard({ header, body, authorName, date, onClick, id }) {
  return (
    <>
      {/* <div className="card" onClick={() => onClick(id)}> */}
      <div className="card" >
      {/* <div className="img-blog-body-div"> */}
        <img src={CardImage} className="card-image" alt="Blog image" />
        {/* </div> */}
        <div className="card-text">
        
          <h3>{header}</h3>
          <p>{body}</p>
          <div className="blog-info">
              <h6>{authorName}</h6>
              <p>{date}</p>
          </div>
        </div>
        {/* <div className="img-blog-body-div">
        <img src={CardImage} className="card-image" alt="Blog image" />
     
        </div> */}
      </div>
    </>
  );
}

export default BlogCard;