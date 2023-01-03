import React from 'react';
import '../styles/topic1.css';
import exile from '../assets/hero-exile.jpg';
import exile1 from '../assets/hero-exile1.jpg';
function Article() {
  return (
    <article className="article">
      <h1 className="article__title text-center py-3" data-aos="fade-up">RIZAL’S EXILE IN DAPITAN </h1>
     
    <div className='hero-container'>

      <img
        src={exile}
        alt="Hero image"
        className="article__hero-image"
        data-aos="fade-left"
        />
        <img
        src={exile1}
        alt="Hero image"
        className="article__hero-image"
        data-aos="fade-right"
        />  
      
    </div>
    <h2 className='text-center'  data-aos="fade-left">INTRODUCTION</h2>
      <div className="article__content"  data-aos="fade-up">
        <p>
            The arrival of Jose Rizal in Manila on June 26, 1892 caused a great deal of excitement among the people of the Philippines. Because of his popularity, the Spaniards were afraid of him, and as a result, they watched his every move very carefully. All of the homes where he had been searched, and any Filipinos who were seen in his company, were considered to be suspects. In accordance with his plans, he established the La Liga Filipina on July 3, 1892. The event took place in the home of Doroteo Ongjunco in Tondo, Manila. 
        </p>
       
      </div>
    </article>
  );
}

export default Article;
