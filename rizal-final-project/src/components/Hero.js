import '../styles/hero.css'
import rizal from '../assets/hero-rizal.png'
function Hero(){
    return(
        <section className='hero-section' id='home'>
          <div className="container px-5 hero-container">
            <div className="row gx-5">
                <div className="col-lg-6 align-self-center hero-paragraph" data-aos="zoom-in-right"  data-aos-duration="1000">
                   <div className='row my-3 mx-2 '>
                        <div className='col-lg-12'>
                            <p className='title'>
                               <span> Dr. Jose Rizal</span>
                            </p>
                        </div>
                        <div className='col-lg-12'>
                            <p>
                                Pambansang bayani
                            </p>
                        </div>
                        <div className='col-lg-12'>
                            <p>
                                ng
                            </p>
                        </div>
                        <div className='col-lg-12'>
                            <p>
                                Pilipinas
                            </p>
                        </div>
                        
                   </div>
                </div>
                <div className="col-lg-6 col-md-12 img-container">
                    
                       <img className='img-fluid' alt="hero-pic" src={rizal}/>
                  
                </div>
            </div>
          </div>
        </section>
    )
}
export default Hero;