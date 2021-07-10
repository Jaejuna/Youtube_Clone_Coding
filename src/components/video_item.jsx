import React from 'react';

const VideoItem = (props) => (
  <>
    <h1>{props.video.snippet.title}</h1>
    <h4>{props.video.snippet.publishedAt}</h4>
  </>
  );

export default VideoItem;
