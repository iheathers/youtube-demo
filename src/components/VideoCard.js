import React from "react";

const VideoCard = (props) => {
    
  return (
    <div className="item" style={{cursor: 'pointer'}} onClick={() => props.onVideoSelect(props.video)}>
      <div className="ui card">
        <div className="image">
          <img src={props.thumbnailURL} alt="props.title" />
        </div>
        <div className="content">
          <div className="header">{props.title} </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
