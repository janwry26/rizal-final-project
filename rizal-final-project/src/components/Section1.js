import '../styles/section1.css';
import "aos/dist/aos.css";
import AOS from 'aos';
import {useEffect } from 'react';

function Section1(){
    useEffect(()=>{
        AOS.init()
    },[]);
    return(
        <div className='top'>
            <h1 className='text-center'>WELCOME TO REACT ANIMATION</h1>
            <h1>FADE</h1>
            <div className='animation' data-aos="fade-right" ></div>
            <div className='animation' data-aos="fade-right"></div>
            <div className='animation' data-aos="flip-right"></div>
            <div className='animation' data-aos="fade-right"></div>
        </div>
    )
}
export default Section1;