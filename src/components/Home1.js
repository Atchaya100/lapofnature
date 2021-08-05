import fetch from 'isomorphic-fetch';
import {useEffect, useState} from 'react';
import Home from './Home'
import './Main.css';
import React from 'react';
//const {MongoClient} = require('mongodb');
function Home1(){
    const[articles,setArticle]=useState([]);
    
   //const uri = "mongodb+srv://atchaya:atchaya2659@cluster0.s4chp.mongodb.net/test?retryWrites=true&w=majority";
   
   // useEffect(()=> async function main(){
      
     
    //  const client = new MongoClient(uri);
     
    //  try {
        // Connect to the MongoDB cluster
    //   await client.connect();
 
        // Make the appropriate DB calls
    //    setArticle(client);
 
   // } catch (e) {
   //    console.error(e);
  // } finally {
        
  //  }
 //  main().catch(console.error);
 //   }
          
    
 //,[])
  

   
  useEffect(()=>{
     fetch('https://strapibackend0.herokuapp.com/articles').then(res =>{ return res.json();}).then(
      data=>{
           setArticle(data);
          
             
          })},[])
    
    
    
    return(
        <div>
             <p className="head">"Enjoy The Green World At Your Home"</p>
              {
            articles.sort((a,b)=>(a.id<b.id?1:-1)).map(({id,content,image,title,description})=>(
     <Home key={id} name={title} content={content} image={image} description={description} />
    
   ))
      }
     
       </div>
    )
}
export default Home1