import fetch from 'isomorphic-fetch';
import {useEffect, useState} from 'react';
import Home from './Home'
import './Main.css';
import React from 'react';

function Articles(){
  const[articles,setArticle]=useState([]);
     useEffect(()=>{
           fetch('https://strapibackend0.herokuapp.com/articles').then(res =>{ return res.json();}).then(
            data=>{
                 setArticle(data);
                })},[])
              
return(      <div>
           
              {
            articles.sort((a,b)=>(a.id<b.id?1:-1)).map(({id,content,image,title,description,date,image1})=>(
     <Home key={id} name={title} content={content} image={image} description={description} video={image1} date={date}/>
    
   ))
      }


      

     
       </div>
                
    )
}
export default Articles