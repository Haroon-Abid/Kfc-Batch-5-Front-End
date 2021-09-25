import './App.css';
import Header from './Components/Header'
import Slider from './Components/Slider'
import Footer from './Components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Location from './pages/Location'
import Contact from './pages/Contact';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Register from './pages/Register';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className='container'> 
    <Router>
    <Header/>  
    <Slider/>
    <Switch>
      <Route exact path="/" component={Home}/> 
      <Route exact path="/Login" component={Login}/>
      <Route exact path="/Location" component={Location}/>
      <Route exact path="/Contact" component={Contact}/>
      <Route exact path="/Collection/:Category" component={Products}/>
      <Route exact path="/Product/:Prod" component={Detail}/>
      <Route exact path="/Register" component={Register}/>

    </Switch>
    <Contact/>
    {/* <Home/>
    <Login/>
    <Location/> */}
    <Footer/>
    </Router>
    </div>
  );
}
export default App;
