import './animation.css';
import './Main.css';
import art from './article.jpg';
import photo from './photo.jpg';
import video from './video.jpg';
import slide from './slider1.jpg';
import {Link} from 'react-router-dom';
function Home1(){   
    return(
        <div>
            <center>
        <div className="slider">
             <img src={slide} alt=""/>
         </div>
         </center>
         <center>
             <p>CHECK OUT THE ARTICLES, IMAGES AND VIDEOS</p>
         <div className="menu">
         <li><Link to='/posts' style={{textDecoration:'none',color:'white'}}><img className="menu1" src={art} alt=""/></Link><br></br>ARTICLES</li>
         <li><Link to='/images' style={{textDecoration:'none',color:'white'}}><img className="menu1" src={photo} alt=""/></Link><br></br>IMAGES</li>
         <li><Link to='/videos' style={{textDecoration:'none',color:'white'}}><img className="menu1" src={video} alt=""/></Link><br></br>VIDEOS</li>
         </div>
         </center>
         </div>
    )
}
export default Home1