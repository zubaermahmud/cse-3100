import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
	return (
		<div className="aboutUsContainer">
			<div className='OurMission'>
				<h3>Our Mission</h3>
				<p>Our mission is to craft innovative, reliable, and user-centric software solutions that drive success, streamline processes, and empower businesses to achieve their goals with cutting-edge technology.</p>
			</div>
			<div className='ourHistory'>
				<h3>Our History</h3>
				<p>We are 2 years old company with skilled member trying to do our best.</p>
			</div>
			<div className='teamContainer'>
				<h3>Our Team</h3>
				<div className='ourTeam'>
					<div className='team-member'>
						<div class="member-photo"></div>
						<div class="member-name">Bob Doe</div>
						<div class="member-role">Director</div>
					</div>
					<div className='team-member'>
						<div class="member-photo"></div>
						<div class="member-name">Bob Doe</div>
						<div class="member-role">Director</div>
					</div>
					<div className='team-member'>
						<div class="member-photo"></div>
						<div class="member-name">Bob Doe</div>
						<div class="member-role">Director</div>
					</div>
				</div>
			</div>
		</div>
	);
};