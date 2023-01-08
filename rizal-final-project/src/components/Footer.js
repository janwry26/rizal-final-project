import React from 'react';
import '../styles/footer.css'

function Footer(){
    return(
       <div className='footer-section' id='about'>

		<footer className="footer-distributed">
 
			<div className="footer-left">
 
				<h3>GROUP<span>7</span></h3>
 
				<ul className="footer-links">
					<li><a href="#home">Home</a></li>				
                    <li><a href="#topic">Topic</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#about">About</a></li>
				</ul>
 
				<p className="footer-company-name">Worked on this project @ 2022-2023</p>
			</div>
 
			<div className="footer-center">
 
				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>Technological University of The Philippines</span> Manila, Philippines</p>
				</div>
 
				<div>
					<i className="fa fa-phone"></i>
					<p>09552868891</p>
				</div>
 
				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:janwry.delacruz@tup.edu.ph">janwry.delacruz@tup.edu.ph</a></p>
				</div>
 
			</div>
 
			<div className="footer-right">
 
				<p class="footer-company-about">
					<span>About the project</span>
					This project is for the final requirements for the Life and Works of Rizal
				</p>
 
				<div class="footer-icons">
 
					<a href="https://www.facebook.com/Janwryyyyy" target="_blank"><i className="fa fa-facebook"></i></a>
					<a href="https://twitter.com/Janwryyyyy" target="_blank"><i className="fa fa-twitter"></i></a>
					<a href="https://www.linkedin.com/in/janwry-dela-cruz-6182b9261/" target="_blank"><i className="fa fa-linkedin"></i></a>
					<a href="https://github.com/janwry26" target="_blank"><i className="fa fa-github"></i></a>
 
				</div>
 
			</div>
 
		</footer>
       </div>
    )
}
export default Footer;