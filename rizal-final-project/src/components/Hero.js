import '../styles/hero.css'
import rizal from '../assets/hero-rizal.jpg'
function Hero(){
    return(
        <section className='hero-section'>
          <div className="container px-5 hero-container">
            <div className="row gx-5">
                <div className="col-lg-6 col-md-12 align-self-center hero-paragraph">
                   <div className='row my-3 mx-2 '>
                        <div className='col-lg-12  '>
                            <p className='fs-1 fw-bold'>
                                Dr. Jose Rizal
                            </p>
                        </div>
                        <div className='col-lg-12'>
                            <p>
                                [ano pwede lagay?]
                            </p>
                        </div>
                        <div className='col-lg-12'>
                            <p>
                                [ano pwede lagay?]
                            </p>
                        </div>
                        <div className='col-lg-12'>
                            <p>
                                [ano pwede lagay?]
                            </p>
                        </div>
                        <div className='col-lg-12'>
                            <p>
                                [ano pwede lagay?]
                            </p>
                        </div>
                   </div>
                </div>
                <div className="col-lg-6 col-md-12 img-container ">
                    
                       <img className='img-fluid img-thumbnail' src={rizal}/>
                  
                </div>
            </div>
          </div>
        </section>
    )
}
export default Hero;