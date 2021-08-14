import fetch from 'isomorphic-fetch';
import {useEffect, useState} from 'react';
function Tips()
{
    const[tip,setTip]=useState([]);
    useEffect(()=>{
          fetch('https://strapibackend0.herokuapp.com/tips').then(res =>{ return res.json();}).then(
           data=>{
                setTip(data);
               })},[])
    return(<div>
      <h1 className="tipg">Tips for garden</h1>
               {
            tip.map(({id,garden})=>(
                <div key={id}  garden={garden}  >
           
     <p className="tipg1"><li>{garden}</li>
          </p> </div>
          ))}
          <h1 className="tiph">Tips for health </h1>
          { tip.map(({id,health})=>(
                <div key={id}  garden={health}  >
           <p className="tiph1"><li> {health}</li></p>
     
           </div>
          ))}
          
          
            
   
    </div>)
}
export default Tips