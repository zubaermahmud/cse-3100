import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
	return (
		<div className="aboutUsContainer">
			<section className="aboutUsHeader">
				<h2>About Us</h2>
				<p>We have a dedicated to their job trying to do the best they can and make something special.</p>
			</section>
			<section className="Content">
				<div className="team">
					<h3 className="ourTeam">Our Team</h3>
					<div className="teamMembers">
						<div className="teamMember">
						<h4>John Doe</h4>
						  <p>CEO & Founder</p>
						</div>
						<div className="teamMember">
						<h4>Alex Summer</h4>
						  <p>Developer</p>
						</div>
						<div className="teamMember">
						<h4>James Gordon</h4>
						  <p>Developer</p>
						</div>
					</div>
				</div>
				
				<div className="Goal">
				  <h3 className='ourGoal'>Our Goal</h3>
				  <p>Our goal is to provide the best service.</p>
				</div>
			</section>
		</div>
	);
};