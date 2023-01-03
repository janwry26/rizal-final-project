import React from 'react';
import '../styles/topic1.css';
import exile from '../assets/hero-exile.jpg';
import exile1 from '../assets/hero-exile1.jpg';
import arrest from '../assets/hero-arrested.jpg';
import arrest1 from '../assets/hero-arrested1.jpg';
import arrive from '../assets/hero-arrive.jpg';


function Article() {
  return (
    <article className="article">
      <h1 className="article__title text-center py-3" data-aos="fade-up">RIZAL’S EXILE IN DAPITAN </h1>
    <h1 className='text-center title'  
        data-aos="fade-left"    
        data-aos-duration="1500"
        data-aos-offset="200"
        >INTRODUCTION</h1>
      <div className="article__content"  
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-offset="200"
        >
        <p>
            The arrival of Jose Rizal in Manila on June 26, 1892 caused a great deal of excitement among the people of the Philippines. Because of his popularity, the Spaniards were afraid of him, and as a result, they watched his every move very carefully. All of the homes where he had been searched, and any Filipinos who were seen in his company, were considered to be suspects. In accordance with his plans, he established the La Liga Filipina on July 3, 1892. The event took place in the home of Doroteo Ongjunco in Tondo, Manila. 
        </p>
       
      </div>
    <div className='hero-container'>
      <img
        src={exile}
        alt="Hero image"
        className="article__hero-image img-fluid img-thumbnail"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-offset="200"
        />
        <img
        src={exile1}
        alt="Hero image"
        className="article__hero-image img-fluid img-thumbnail"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-offset="200"
        />  
      
    </div>
      {/* section2 */}
     
    <h1 className='text-center title'  
        data-aos="fade-left"    
        data-aos-duration="1500"
        data-aos-offset="200"
        >WHY RIZAL ARRESTED</h1>
      <div className="article__content"  
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-offset="200"
        >
        <p>
            The arrival of Jose Rizal in Manila on June 26, 1892 caused a great deal of excitement among the people of the Philippines. Because of his popularity, the Spaniards were afraid of him, and as a result, they watched his every move very carefully. All of the homes where he had been searched, and any Filipinos who were seen in his company, were considered to be suspects. In accordance with his plans, he established the La Liga Filipina on July 3, 1892. The event took place in the home of Doroteo Ongjunco in Tondo, Manila. 
        </p>
       
      </div>
    <div className='hero-container'>
      <img
        src={arrest}
        alt="Hero image"
        className="article__hero-image img-fluid img-thumbnail"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-offset="200"
        />
        <img
        src={arrest1}
        alt="Hero image"
        className="article__hero-image img-fluid img-thumbnail"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-offset="200"
        />  
      
    </div>
    <h1 className='text-center title'  
        data-aos="fade-left"    
        data-aos-duration="1500"
        data-aos-offset="200"
        >ARRIVAL IN DAPITAN</h1>
      <div className="article__content"  
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-offset="200"
        >
        <p>
            The arrival of Jose Rizal in Manila on June 26, 1892 caused a great deal of excitement among the people of the Philippines. Because of his popularity, the Spaniards were afraid of him, and as a result, they watched his every move very carefully. All of the homes where he had been searched, and any Filipinos who were seen in his company, were considered to be suspects. In accordance with his plans, he established the La Liga Filipina on July 3, 1892. The event took place in the home of Doroteo Ongjunco in Tondo, Manila. 
        </p>
       
      </div>
    <div className='hero-container'>
      <img
        src={arrive}
        alt="Hero image"
        className="article__hero-image img-fluid img-thumbnail"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-offset="200"
        />
        <img
        src={arrive}
        alt="Hero image"
        className="article__hero-image img-fluid img-thumbnail"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-offset="200"
        />  
      
    </div>
    </article>
  );
}

export default Article;
