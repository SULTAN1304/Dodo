import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './components/header/Header'
import Header from './components/header/Header';
import Navbar from './components/navbar/navbar';
// import Slider from 'react-slick';
import Content from './components/content/content';
import Main from './pages/main/Main';
// import Slider from './components/slider/slider';
// import { SliderData } from './components/slider/slider';
import Contacts from './pages/Contacts';
import { useState } from 'react';



function App() {
 const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) || [])
 
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar basket={basket}/>


        {/* <ImageSlider slides={SliderData}></ImageSlider> */}
        <Switch>
          <Route exact path="/">
            <Main setBasket={setBasket}/>
          </Route>
          <Route path="/about">
            <Contacts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
