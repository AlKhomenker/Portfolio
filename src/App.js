import React ,{useState}from 'react';
import './App.css';
import {MaimPage} from "./Pages/MainPage/MainPage";
import {Footer} from "./Components/Footer/Footer";
import {Route} from "react-router-dom";
import {Skills} from "./Pages/Skills/Skills";
import {Contact} from "./Pages/Contact/Contact";
import {PersonInfo} from "./Pages/PersonInfo/PersonInfo";

function App() {

    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
        }
    };

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    window.addEventListener('scroll', checkScrollTop);

  return (
    <div className="App">
        <Route path="/" render = {() => <MaimPage/>}/>
        <Route path={'/personinfo'} render = {() => <PersonInfo/>}/>
        <Route path={'/skills'} render = {() => <Skills/>}/>
        <Route path={'/contact'} render = {() => <Contact/>}/>
      <Footer/>
        <button  className="scrollTop"
                 onClick={scrollTop}
                 style={{display: showScroll ? 'flex' : 'none'}}>up</button>
    </div>
  );
}

export default App;
