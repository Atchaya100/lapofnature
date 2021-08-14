import './Main.css'
import fetch from 'isomorphic-fetch';
import {useEffect, useState} from 'react';

function Thougth({thought})
{
  const[thoughts,setThought]=useState([]);
     useEffect(()=>{
           fetch('https://strapibackend0.herokuapp.com/thoughts').then(res =>{ return res.json();}).then(
            data=>{
                 setThought(data);
                })},[])
  
  
  
    return(
    <div>
      <br></br>
       <p className="head1">Today's Thought</p>
      
      
      {
            thoughts.map(({thought})=>(
              <p className="quote" thought={thought}>{thought}</p> 
    
   ))
      }
   
      
      

    </div>)
}
export default Thougth