import React from 'react';
import './css/index.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SectionOne from './components/Main/SectionOne/SectionOne';
import SectionTwo from './components/Main/SectionTwo/SectionTwo';
import SectionThree from './components/Main/SectionThree/SectionThree';

export default function App() {
	return (
		<div className='App'>
			<Header />
			<Main />
			<SectionOne />
			<SectionTwo />
			<SectionThree />
		</div>
	);
}
