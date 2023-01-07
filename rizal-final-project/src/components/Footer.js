import React from 'react';
import '../styles/footer.css'

function Footer(){
    return(
       <div className='footer-section'>

		<footer className="footer-distributed">
 
			<div className="footer-left">
 
				<h3>WebDev<span>Trick</span></h3>
 
				<ul className="footer-links">
					<li><a href="#home">Home</a></li>				
                    <li><a href="#topic">Topic</a></li>
                    <li><a href="#team">team</a></li>
                    <li><a href="#about">about</a></li>
				</ul>
 
				<p className="footer-company-name">webdevtrick &copy; 2019</p>
			</div>
 
			<div className="footer-center">
 
				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>21 Revolution Street</span> Delhi, India</p>
				</div>
 
				<div>
					<i className="fa fa-phone"></i>
					<p>+1 555 123456</p>
				</div>
 
				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">contact@webdevtrick.com</a></p>
				</div>
 
			</div>
 
			<div className="footer-right">
 
				<p class="footer-company-about">
					<span>About the company</span>
					Web Dev Trick is a blog for web designers, graphic designers, web developers &amp; SEO Learner.
				</p>
 
				<div class="footer-icons">
 
					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="#"><i className="fa fa-linkedin"></i></a>
					<a href="#"><i className="fa fa-github"></i></a>
 
				</div>
 
			</div>
 
		</footer>
       </div>
    )
}
export default Footer;