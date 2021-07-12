import React from 'react';
import styles from '../video_item/video_item.module.css';

//deconstructing instead of "props"
const VideoItem = ({ video: { snippet }}) => (
  <ul className={styles.container}>
    <div className={styles.video}>
      <img
        //before deconstructing props.video.snippet...
        className={styles.thumbnail}
        src={snippet.thumbnails.medium.url}
        alt="video thumbnail"
      />
      <div className={styles.metadata}>
        <p className={styles.title}>{snippet.title}</p>
        <p className={styles.channel}>{snippet.channelTitle}</p>
      </div>
    </div>
  </ul>
);

export default VideoItem;

