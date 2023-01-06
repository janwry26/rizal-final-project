import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Section1 from './components/Section1';
import Quiz from './components/Quiz';
import Topic1 from './components/Topic1';
import Team from './components/Team';
import "aos/dist/aos.css";
import AOS from 'aos';
import {useEffect } from 'react';

function App() {
  useEffect(()=>{
    AOS.init()
},[]);
  return (
    
   <>
    <Navbar/>
    <Hero/>
    <Topic1/>
    <Quiz/>
    <Section1/>
    <Team/>
   </>
  );
}

export default App;
