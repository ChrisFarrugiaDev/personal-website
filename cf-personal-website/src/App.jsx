import { useEffect, useReducer, useRef, useState } from 'react'

import './App.scss'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'

function App() {

	const app = useRef(null);


function handleMouseMove(e) {
  if (!app.current) return;

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const xp = (e.clientX / vw) * 100;
  const yp = (e.clientY / vh) * 100;

  app.current.style.transition = 'background 0.25s ease-out'; // smoother glow transition
  app.current.style.background = `
    radial-gradient(
      350px at ${xp}% ${yp}%,          
      rgba(41,63,114,0.4),          
      rgba(41,63,114,0.38) 20%,     
      transparent 100%
    )
  `;
}

function handleMouseLeave() {
  if (!app.current) return;
  app.current.style.transition = 'background 0.4s ease-out';
  app.current.style.background = '';
}

	useEffect(()=>{
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseleave', handleMouseLeave);

		return function() {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseleave', handleMouseLeave);
		}
	}, [app])


	return (
		<div className='app' ref={app}>
			<div className="app__layout">
				<LeftPanel></LeftPanel>
				<RightPanel></RightPanel>
			</div>
		</div>
	)
}

export default App
