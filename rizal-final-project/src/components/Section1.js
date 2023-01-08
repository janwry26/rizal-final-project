import '../styles/section1.css';
import {useEffect } from 'react';
function Section1(){
    return(
        <section className="topic-section" id="faqsId">
        <div className="Faqs">
            {/* HEADER SECTION */}
            <div className="container text-center">
                <div className="row faq-title">
                 <h1 className='text-center gy-5'>SUMMARY</h1>
                </div>
                    <h1 className='topic-title'>Rizal Exile in Dapitan</h1>
                <div className="row">
                    <div className="col">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item" data-aos="zoom-in-up" data-aos-duration="1000">
                                <h2 className="accordion-header"  id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                WHY RIZAL ARRESTED 
                                </button>
                                </h2>   
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                    Jose Rizal was arrested and exiled to the island of Dapitan in Mindanao after returning to the Philippines in 1892. He requested and was granted permission to go to Cuba to assist with a yellow fever outbreak.
                                    </p>
                                </div>
                                </div>
                            </div>
                           

                            <div className="accordion-item" data-aos="zoom-in-up" data-aos-duration="1000">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                ARRIVAL IN DAPITAN 
                                </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                    Jose Rizal left Manila on the steamer Cebu under heavy guard and arrived in Dapitan on June 17. He stayed in Dapitan until July 31, 1896, during which time he focused on serving the people through his civic works, medical practices, land development, and promotion of education.
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item" data-aos="zoom-in-up" data-aos-duration="1000">
                                <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"> 
                                PEACEFUL LIFE OF RIZAL IN DAPITAN 
                                </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                    Jose Rizal won a lottery prize of 6,000 pesos which he used to purchase land in Dapitan and build a house. He established a school in 1893, teaching subjects including reading, writing, languages, geography, history, mathematics, industrial work, nature study, morals, and gymnastics to a total of 16 students, who worked in his garden and on community projects in lieu of tuition. Rizal also ran a clinic in Dapitan, treating patients with local medicinal plants and never accepting payment, except from wealthy individuals whose fees he used to fund streetlamps in the town. He had a hospital next to his house and was highly respected by the people of Dapitan.
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item" data-aos="zoom-in-up" data-aos-duration="1000">
                                <h2 className="accordion-header" id="flush-headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                CHALLENGING RELIGION 
                                </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                    Jose Rizal had a religious scholarly debate with Father Pablo Pastells in Dapitan, revealing Rizal's anti-Christianity. The debates ended inconclusively with neither party persuaded by the other's arguments.
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item" data-aos="zoom-in-up" data-aos-duration="1000">
                                <h2 className="accordion-header" id="flush-headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                CAREERS AND CONTRIBUTION 
                                </button>
                                </h2>
                                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                       Jose Rizal utilized his time in Dapitan to work on his artistic and literary skills, do agricultural and civic projects, engage in business activities, and write letters to his European friends. He was a physician, engineer, educator, agriculturist, inventor, linguist, and scientist during his time in Dapitan. As a physician, he provided free medicine to the poor and charged wealthy patients for his services. As an engineer, he built a waterworks system in Dapitan and was named an expert surveyor by the Ateneo Municipal. As an educator, he founded a school for young boys, teaching them a variety of subjects including English, Spanish, math, and morals. As an agriculturist, he planted crops and fruit trees on his farm and imported agricultural machinery from the United States to teach modern farming methods to the local farmers. As an inventor, he created a lighter and a wooden brick-maker. As a linguist, he studied and compared the Bisayan and Malayan languages spoken in the area. As a scientist, he explored the jungles with his students, looking for specimens to send to museums in Europe, and conducted research in various fields including ethnography, archaeology, geology, anthropology, and geography.
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item" data-aos="zoom-in-up" data-aos-duration="1000">
                                <h2 className="accordion-header"  id="flush-headingSix">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                ROMANTIC AFFAIR WITH JOSEFINE BRAKEN 
                                </button>
                                </h2>   
                                <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                    Jose Rizal fell in love with Josephine Bracken, an Irish girl, after she arrived in Dapitan with her blind foster father and a Filipina named Manuela Orlac. They planned to marry within a month, but the parish priest refused to marry them unless the Bishop of Cebu approved. They exchanged vows in their own way, which caused scandal, and Josephine became pregnant, giving birth to a premature baby boy who died after three hours. The child was named Francisco and buried in Dapitan.
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item" data-aos="zoom-in-up" data-aos-duration="1000">
                                <h2 className="accordion-header" id="flush-headingSeven">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                KATIPUNAN SEEKS RIZAL ADVICE
                                </button>
                                </h2>   
                                <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                    Jose Rizal was opposed to the Katipunan's plan to launch a revolution against the Spaniards because he believed the Filipinos were not yet prepared for it and the group lacked the necessary resources. He also did not want to break his promise to the Spanish authorities by returning to Dapitan.
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item" data-aos="zoom-in-up" data-aos-duration="1000">
                                <h2 className="accordion-header" id="flush-headingEight">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                                RIZAL AS A VOLUNTEER IN CUBA
                                </button>
                                </h2>   
                                <div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                    Jose Rizal offered his services as a military doctor to Cuba during the Cuban revolution, but his request was not granted until months later. He was finally allowed to travel to Manila and then to Spain, where he was assigned to the Army of Operations in Cuba.
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item" data-aos="zoom-in-up" data-aos-duration="1000">
                                <h2 className="accordion-header" id="flush-headingNine">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                                FAREWELL IN DAPITAN
                                </button>
                                </h2>   
                                <div id="flush-collapseNine" className="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                    Jose Rizal left Dapitan on the steamer España with his family and students, saying goodbye to the people of Dapitan with a heavy heart.
                                    </p>
                                </div>
                                </div>
                            </div>
                    <h1 className='topic-title' data-aos="zoom-in-up" data-aos-duration="1000">Issues of Rizal</h1>
                    <div className="accordion-item" data-aos="zoom-in-up" data-aos-duration="1000">
                                <h2 className="accordion-header" id="flush-headingTen">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                                JOSE RIZAL AND THE SELECTION FOR PHILIPPINE NATIONAL HERO 
                                </button>
                                </h2>   
                                <div id="flush-collapseTen" className="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                    The National Heroes Committee in the Philippines made recommendations for historical figures to be recognized as national heroes based on their contributions to the nation's freedom and way of life, their impact on the country's future, and their expression of the people's values. The committee recommended Jose Rizal, Andres Bonifacio, Emilio Aguinaldo, Apolinario Mabini, Marcelo H. Del Pilar, Sultan Dipatuan Kudarat, Juan Luna, Melchora Aquino, and Gabriela Silang as national heroes. However, no action has been taken on these recommendations since they were submitted in 1995. The potential for requests for proclamations and potential debates about historical controversies may have contributed to the lack of action.
                                    </p>
                                </div>
                                </div>
                            </div>
                    <h1 className='topic-title' data-aos="zoom-in-up" data-aos-duration="1000">Issues and controversies on the Heroism of Dr. Jose Rizal </h1>

                            <div className="accordion-item" data-aos="zoom-in-up" data-aos-duration="1000"> 
                                <h2 className="accordion-header" id="flush-headingEleven">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven" aria-expanded="false" aria-controls="flush-collapseEleven">
                                RETRACTION CONTROVERSY 
                                </button>
                                </h2>   
                                <div id="flush-collapseEleven" className="accordion-collapse collapse" aria-labelledby="flush-headingEleven" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                    The controversy surrounding Jose Rizal's alleged retraction of his anti-Catholic Church views and writings has been debated by scholars. Some believe the document to be a forgery, citing handwriting analysis, multiple versions of the document, a alleged confession by the forger, and discrepancies in the contents of the different versions. Others also point out that no member of Rizal's family had seen the document, it did not prevent his execution, and there is no public record of Rizal and Josephine Bracken's marriage.
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item" data-aos="zoom-in-up" data-aos-duration="1000">
                                <h2 className="accordion-header" id="flush-headingTwelve">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwelve" aria-expanded="false" aria-controls="flush-collapseTwelve">
                                AMERICAN SPONSORSHIP
                                </button>
                                </h2>   
                                <div id="flush-collapseTwelve" className="accordion-collapse collapse" aria-labelledby="flush-headingTwelve" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                    Renato Constantino believed that American sponsorship played a role in elevating Jose Rizal above other Philippine heroes. Professor Ambeth Ocampo argued that Rizal was already well-respected before American sponsorship, and that the Americans simply capitalized on this sentiment.
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item" data-aos="zoom-in-up" data-aos-duration="1000">
                                <h2 className="accordion-header" id="flush-headingThirteen">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThirteen" aria-expanded="false" aria-controls="flush-collapseThirteen">
                                WAS RIZAL ANTI-REVOLUTION? 
                                </button>
                                </h2>   
                                <div id="flush-collapseThirteen" className="accordion-collapse collapse" aria-labelledby="flush-headingThirteen" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                    Renato Constantino and other historians argue that Jose Rizal opposed the Philippine Revolution and was anti-revolutionary, citing his volunteering as a doctor for the Spanish in the Cuban revolution and his condemnation of the Philippine Revolution as "disastrous" and a "waste of lives" in his December 15, 1898 letter. However, Floro Quibuyen and other scholars argue that Rizal was a revolutionary, citing his letters discussing the revolution, his final poem praising revolutionaries, and the involvement of his family members in the Katipunan.
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item" data-aos="zoom-in-up" data-aos-duration="1000">
                                <h2 className="accordion-header" id="flush-headingFourteen">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourteen" aria-expanded="false" aria-controls="flush-collapseFourteen">
                                WAS RIZAL AN AMBIVALENT HERO OR FENCE SITTER? 
                                </button>
                                </h2>   
                                <div id="flush-collapseFourteen" className="accordion-collapse collapse" aria-labelledby="flush-headingFourteen" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                    Jose Rizal is considered an ambivalent hero by some because different accounts of his views on the Philippine revolution and armed struggle exist. Some claim he completely rejected the revolution, while others say he did not completely reject it and gave instructions to the Katipunan to ensure its success. Some historians argue that Rizal's views should be understood in the context of 19th-century Philippines and the perspective of Filipinos at the time. Others believe that Rizal was ambivalent, citing his works that both reject armed struggle and support the revolution.
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item" data-aos="zoom-in-up" data-aos-duration="1000">
                                <h2 className="accordion-header" id="flush-headingFifteen">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFifteen" aria-expanded="false" aria-controls="flush-collapseFifteen">
                                IS RIZAL STILL RELEVANT?
                                </button>
                                </h2>   
                                <div id="flush-collapseFifteen" className="accordion-collapse collapse" aria-labelledby="flush-headingFifteen" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                    Jose Rizal is still considered a relevant figure in Philippine history because the social issues he addressed, such as corruption and poverty, are still present in the country. He is also seen as a role model for youth and a symbol of national pride and identity. The study of Rizal and Philippine history helps to foster a sense of nationalism and understanding of the country's founding ideals.
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