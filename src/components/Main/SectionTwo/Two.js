import React from 'react';
import image1 from '../../../css/images/fulls/01.jpg';
import image2 from '../../../css/images/fulls/02.jpg';
import image3 from '../../../css/images/fulls/03.jpg';
import image4 from '../../../css/images/fulls/04.jpg';
import image5 from '../../../css/images/fulls/05.jpg';
import image6 from '../../../css/images/fulls/06.jpg';

export default function Two() {
	return (
		<section id='two'>
			<h2>Recent Work</h2>
			<div className='row'>
				<article className='col-6 col-12-xsmall work-item'>
					<a href='../images/fulls/01.jpg' className='image fit thumb'>
						<img src={image1} alt='' />
					</a>
					<h3>Magna sed consequat tempus</h3>
					<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
				</article>
				<article className='col-6 col-12-xsmall work-item'>
					<a href='images/fulls/02.jpg' className='image fit thumb'>
						<img src={image2} alt='' />
					</a>
					<h3>Ultricies lacinia interdum</h3>
					<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
				</article>
				<article className='col-6 col-12-xsmall work-item'>
					<a href='images/fulls/03.jpg' className='image fit thumb'>
						<img src={image3} alt='' />
					</a>
					<h3>Tortor metus commodo</h3>
					<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
				</article>
				<article className='col-6 col-12-xsmall work-item'>
					<a href='images/fulls/04.jpg' className='image fit thumb'>
						<img src={image4} alt='' />
					</a>
					<h3>Quam neque phasellus</h3>
					<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
				</article>
				<article className='col-6 col-12-xsmall work-item'>
					<a href='images/fulls/05.jpg' className='image fit thumb'>
						<img src={image5} alt='' />
					</a>
					<h3>Nunc enim commodo aliquet</h3>
					<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
				</article>
				<article className='col-6 col-12-xsmall work-item'>
					<a href='images/fulls/06.jpg' className='image fit thumb'>
						<img src={image6} alt='' />
					</a>
					<h3>Risus ornare lacinia</h3>
					<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
				</article>
			</div>
			<ul className='actions'>
				<li>
					<a href='#' className='button'>
						Full Portfolio
					</a>
				</li>
			</ul>
		</section>
	);
}
