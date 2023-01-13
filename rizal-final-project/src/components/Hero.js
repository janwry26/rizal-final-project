import '../styles/hero.css'
import rizal from '../assets/hero-rizal.jpg'
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
                                Pambansang bayani g
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
                <div className="col-lg-6 col-md-12 img-container " data-aos="zoom-in-left"  data-aos-duration="1000">
                    
                       <img className='img-fluid img-thumbnail' alt="hero-pic" src={rizal}/>
                  
                </div>
            </div>
          </div>
        </section>
    )
}
export default Hero;