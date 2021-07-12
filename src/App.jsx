import React, {useEffect, useState} from 'react';
import './App.css';
import VideoList from './components/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAB9zjpkb-DZA2YeUeA82WRhmotUbqOoUE", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .then(result => console.log(videos))
      .catch(error => console.log('error', error));
  }, []);
  return <VideoList videos={videos} />;
}

export default App;
