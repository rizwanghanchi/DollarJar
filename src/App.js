import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import HomePage from './HomePage';
import UserComponent from './UserComponent';


function App() {
  return (
   <Router>
     <div>
  
       <Route exact path="/" component={HomePage}/>
       <Route path="/user" component={UserComponent}/>
      
     </div>
   </Router>
  );
}

export default App;
