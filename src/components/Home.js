import './Main.css';
import Extra from './Extra';
import React from 'react';

const Home=({id,content,name,image,description,date})=>{
  const [showResults, setShowResults] = React.useState(false)
  const[showButtons, setShowButtons]=React.useState(true)
  const[showLess,setShowLess]=React.useState(false)
  const onClick = () => {setShowResults(true);
    setShowButtons(false);
    
  }
  const remove=()=>{setShowResults(false);
  setShowButtons(true);
setShowLess(false);}
  
  return (
    <div> 
         
          <br> 
          </br>
          
          <div key={id} className="outline">
        
           <h1 className="text">{name} 
           </h1>
           <center>
          <img  className="image2" src={image.formats.small.url} alt=""/>
          </center>
          <p className="text2" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{description}</p>

          { showResults ? <Extra content={content}/> :  null }
          { showButtons ?
           <button className="button" onClick={onClick}>SEE FULL ARTICLE</button> : <button className="button" onClick={remove}>SEE LESS</button>
          }
        {showLess ?<button className="button" onClick={remove}>SEE LESS</button>:null }
        <p className="date">Posted on: {date}</p>
       
          </div>
 
          
          
          
          
          
           
        
           
       
     </div>
  )

}
export default Home