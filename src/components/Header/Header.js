import React, { Fragment } from 'react';
import Footer from '../Footer/Foot';

export default function Header() {
	return (
		<Fragment>
			<header id='header'>
				<div className='inner'>
					<a href='https://www.google.com' className='image avatar'>
						<img src='images/avatar.jpg' alt='' />
					</a>
					<h1>
						<strong>I am Christian Mack</strong>. a super simple
						<br />
						responsive site template freebie
						<br />
						crafted by <a href='http://html5up.net'>HTML5 UP</a>.
					</h1>
					<Footer />
				</div>
			</header>
		</Fragment>
	);
}
