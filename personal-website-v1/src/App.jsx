
import { useEffect, useReducer, useRef, useState } from 'react';

import './App.scss';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

// -------------------------------------------------------------------------------------------------

export default function App() {

	// - State ---------------------------------------------------------
	const [activeSection, setActiveSection] = useState('about');
	const [selectedNav, setSelectedNav] = useState('');

	// - Refs ----------------------------------------------------------
	const app = useRef(null);

	// - Handlers ------------------------------------------------------

	// Updates active section based on scroll position
	function handleActiveSection(s) {
		// console.log(s)
		setActiveSection(s);
	}

	// Tracks which navigation item was selected
	function handleSelectedNav(s) {
		console.log(s);
		setSelectedNav(s);
	}

	// Mouse movement glow effect
	function handleMouseMove(e) {
		if (!app.current) return;

		const vw = window.innerWidth;
		const vh = window.innerHeight;
		const xp = (e.clientX / vw) * 100;
		const yp = (e.clientY / vh) * 100;

		app.current.style.transition = 'background 0.25s ease-out'; 
		app.current.style.background = `
			radial-gradient(
				350px at ${xp}% ${yp}%,
				rgba(41,63,114,0.4),
				rgba(41,63,114,0.38) 20%,
				transparent 100%
			)
		`;
	}

	// Removes glow when cursor leaves window
	function handleMouseLeave() {
		if (!app.current) return;
		app.current.style.transition = 'background 0.4s ease-out';
		app.current.style.background = '';
	}

	// - Lifecycle -----------------------------------------------------
	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseleave', handleMouseLeave);

		return function () {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, [app]);

	// - Render --------------------------------------------------------
	return (
		<div className='app' ref={app}>
			
		
				<div className="app__layout">
					<LeftPanel
						activeSection={activeSection}
						onNavClick={handleSelectedNav}
					/>
					<RightPanel
						onActiveSection={handleActiveSection}
						scrollToSection={selectedNav}
					/>
				</div>


	
		</div>
	);
}




