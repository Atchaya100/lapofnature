import "./Main.css";
import React from 'react'
import {Link} from 'react-router-dom';



function Main(){
         
  
    return(
        <div>
        
        
        <div className="nav">
        <h1 className="start">Lap of nature</h1>
               <ul><li><Link to='/' style={{textDecoration:'none',color:'white'}}>Home</Link></li>
                <li><Link to='/thought'style={{textDecoration:'none',color:'white'}}>Today's thought</Link></li>
                <li><Link to='/tips' style={{textDecoration:'none',color:'white'}}>Tips</Link></li>
                <li><Link to='/me' style={{textDecoration:'none',color:'white'}}>About Me</Link></li> </ul>
       </div>
      
            
               
         
        
          </div>)
}
export default Main