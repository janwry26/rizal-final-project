import '../styles/section1.css';
import "aos/dist/aos.css";
import AOS from 'aos';
import {useEffect } from 'react';

function Section1(){
    useEffect(()=>{
        AOS.init()
    },[]);
    return(
        <section className="topic-section" id="faqsId">
        <div className="Faqs">
            {/* HEADER SECTION */}
            <div className="container text-center">
                <div className="row faq-title gx-5">
                 <h1>participation</h1>
                </div>


                
                <div className="row">
                    <div className="col">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header"  id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        type here
                                </button>
                                </h2>   
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                        Each eggplant would only cost 2 MATIC for Talong Lovers (OG) and Talonglisted (WL)5 MATIC during public minting.
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    type here
                                </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                        MISSION <br />
                                        It aims to CONNECT PEOPLE, SUPPORT LOCAL ARTISTS, and PROMOTE SOCIAL INVOLVEMENT. <br />
                                        <br />
                                        VISION <br />
                                        For it TO BE ENGAGED IN SOCIAL, ARTISTIC, and FUN ACTIVITIES with the help of experts and community members.
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"> 
                                    type here
                                </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                        #1 TROPANG TALONG MEMBERSHIP <br />
                                        #2 EXCLUSIVE WEB3 SKILLS WORKSHOP <br />
                                        #3 ACCESS TO TALONG ALPHA CHANNEL <br />
                                        #4 ACCESS TO PARTNER DISCOUNTS <br />
                                        #5 TALONG PHYSICAL ITEMS (COMING SOON)
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        type here
                                </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                        It is community-focused, goal-driven, and socially involved. The project aims to <br />
                                        develop certain values from the community members and make them experience a <br />
                                        community that promotes involvement and development in various ways.
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                        type here
                                </button>
                                </h2>
                                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                        The end goal is to provide personal and skill development to the holders, as well <br />
                                        as bring them new connections and opportunities they may embrace.
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Section1;