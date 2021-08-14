import fetch from 'isomorphic-fetch';
import {useEffect, useState} from 'react';
function Videos(){
    const[videos,setVideos]=useState([]);
    useEffect(()=>{
          fetch('https://strapibackend0.herokuapp.com/videos').then(res =>{ return res.json();}).then(
           data=>{
                setVideos(data);
               })},[])
    return(
        <div>
           <center> <h3>VIDEOS</h3></center>
            
            <center>
              {
            videos.map(({video,id,about})=>(
                <div id={id} className="video1" video={video} about={about} >
            <iframe  className="video2" src={video.url} title={about}></iframe>
           <p key={id} className="textv">{about}</p>
            </div>
     ))} </center>
        </div>
    )
}
export default Videos