import React from "react";

const NewsItem =(props)=> {
  
    let { title, description, imageurl, newsUrl,author,date,source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}}>
        <span className=" badge rounded-pill bg-danger"  >
    {source}
    
  </span>
  </div>
          <img
            src={
              !imageurl
                ? "https://assets.sentinelassam.com/h-upload/2023/03/15/444676-frofotkayaawblp.jpg"
                : imageurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body" >
            <h5 className="card-title" style={{fontFamily:'Arial'}}> {title} </h5>{" "}
            <p className="card-text" style={{color:'black' }}> {description} </p>{" "}
            <p className="card-text" style={{fontFamily:'Arial',color:'white' ,background:'black'}}><small>By {!author ? "Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark">
              {" "}
              Read More{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }


export default NewsItem;
