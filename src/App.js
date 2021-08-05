import Main from './components/Main';
import Home1 from './components/Home1';
import Thought from './components/Thought';
import Tips from './components/Tips'
import Me from './components/Me';
import Footer from './components/Footer';
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
       </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
