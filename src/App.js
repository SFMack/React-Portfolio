import React from 'react';
import './css/index.css';
import Home from './components/HomeSection/Home';
import About from './components/AboutSection/About';
import Portfolio from './components/PortfolioSection/Portfolio';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className='App'>
			<Home />
			<About />
			<Portfolio />
			<Footer />
		</div>
	);
}

export default App;
