import Main from './components/Main';
import Home1 from './components/Home1';
import Thought from './components/Thought';
import Tips from './components/Tips'
import Me from './components/Me';
import Articles from './components/Articles';
import Footer from './components/Footer';
import Images from './components/Images';
import Videos from './components/Videos';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  return (
   
    <Router>
       
    <div>
      <Main/>
       <Switch>
          <Route path='/' exact>
           <Home1/>
         </Route>
         <Route path='/thought'>
           <Thought/>
         </Route>
         <Route path='/tips'>
           <Tips/>
         </Route>
         <Route path='/me'><Me/></Route>
         <Route path='/posts'><Articles/></Route>
         <Route path='/images'><Images/></Route>
         <Route path='/videos'><Videos/></Route>
       </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
