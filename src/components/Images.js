import './Main.css';
import fetch from 'isomorphic-fetch';
import {useEffect, useState} from 'react';
function Images(){
    const[images,setImages]=useState([]);
    useEffect(()=>{
          fetch('https://strapibackend0.herokuapp.com/images').then(res =>{ return res.json();}).then(
           data=>{
                setImages(data);
               })},[])
    return(
        <div >
        
            <h1 className="text">IMAGES</h1>
            
        {
            images.map(({pictures})=>(
                <div className="pictures" pictures={pictures} >
            <img src={pictures.formats.small.url} alt=""/>
           
            </div>
     ))}
        </div>
    )
}
export default Images