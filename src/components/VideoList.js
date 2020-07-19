import React from "react";
import VideoCard from "./VideoCard";

const VideoList = (props) => {
    
  const videos = props.videos.map((video) => {    
    return (
      <VideoCard
        key={video.id.videoId}
        thumbnailURL={video.snippet.thumbnails.medium.url}
        title={video.snippet.title}
        video={video}
        onVideoSelect={props.onVideoSelect}
      />
    );
  });

  return <div className="ui relaxed divided list selection">{videos}</div>;
};

export default VideoList;
