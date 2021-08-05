import './Main.css';
import Extra from './Extra';
import React from 'react';

const Home=({id,content,name,image,description})=>{
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
         
           
          
          <div key={id} className="outline">
        
           <h1 className="text">{name} &nbsp;
           </h1>
           
          <img  className="image2" src={image.formats.small.url} alt=""/>
          
          <p className="text2" >{description}</p>

          { showResults ? <Extra content={content}/> :  null }
          { showButtons ?
           <button className="button" onClick={onClick}>SEE FULL ARTICLE</button> : <button className="button" onClick={remove}>SEE LESS</button>
          }
        {showLess ?<button className="button" onClick={remove}>SEE LESS</button>:null }
       
       
          </div>
          
          
          
          
          
           
        
           
       
     </div>
  )

}
export default Home