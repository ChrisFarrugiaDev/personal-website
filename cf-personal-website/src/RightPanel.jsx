
import { useEffect, useRef, useState } from 'react';
import './RightPanel.scss';
import { useSectionSpy } from './hooks/useSectionSpy';
import { ChrisFarrugiaDevCard, IoTrackLiveCard, IotSolutionsCard, TetrisCard } from './Cards';

// -------------------------------------------------------------------------------------------------

export default function RightPanel({ onActiveSection, scrollToSection }) {
	// - Refs ----------------------------------------------------------
	const containerRef = useRef(null);

	// - Hooks ---------------------------------------------------------
	const { activeSection, register } = useSectionSpy(containerRef, {
		rootMargin: '30px 0px -70% 0px',
		initial: 'about',
		// onChange: (key) => console.log('active:', key), // optional
	});

	// - State ---------------------------------------------------------
	const [hoveredCard, setHoveredCard] = useState(false);

	// - Handlers ------------------------------------------------------
	function handleCardHover(id) {	
		setHoveredCard(id);
	}

	// - Lifecycle -----------------------------------------------------
	useEffect(() => {
		onActiveSection(activeSection);
	}, [activeSection]);

	useEffect(() => {
		if (!scrollToSection || !containerRef.current) return;

		// Find the target element within the container
		const target = containerRef.current.querySelector(
			`[data-section="${scrollToSection}"]`
		);

		if (target) {
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start', // or 'center', depending on your layout
			});
		}
	}, [scrollToSection]);

	// - Render --------------------------------------------------------
	return (
		<section id="about" className="right-panel" ref={containerRef}>

			<div className="section-title" data-section="about" ref={register('about')}> About </div>
			<About />

			<div id="experience" className="section-title" data-section="experience" ref={register("experience")} > Experience </div>
			<Experience hoveredCard={hoveredCard} onHoverChange={handleCardHover} />


			<div id="projects" className="section-title" data-section="projects" ref={register("projects")} > Side Projects </div>
			<Projects hoveredCard={hoveredCard} onHoverChange={handleCardHover} />

			<div style={{ opacity: 0, height: 0, margin: 0, padding: 0}} id="cv_contact" className="section-title" data-section="cv_contact" ref={register("cv_contact")} ></div>
			<Contact></Contact>

		</section>
	);
}

// -------------------------------------------------------------------------------------------------

function About() {
	return (
		<section className="about">
			<p className="about__paragraph">
				I'm a <b className="about__highlight">self-taught Software Developer</b> who enjoys
				turning complex ideas into clean, scalable software. I've been learning and building
				for over seven years — and working <b className="about__highlight">professionally for the past three and a half</b>,
				continuously improving and delivering high-quality systems.
			</p>
			<p className="about__paragraph">
				I specialize in <b className="about__highlight">full-stack development</b> and work
				across both front-end and back-end technologies, including <b className="about__highlight">
					Vue.js, Node.js, Laravel, PostgreSQL/MySQL, Redis, RabbitMQ, Docker, and Linux
				</b> server administration.
			</p>
			<p className="about__paragraph">
				I've led multiple <b className="about__highlight">IoT integrations</b> and developed
				scalable, real-time applications that enhance user experience and operational insight.
				I'm currently deepening my expertise in <b className="about__highlight">Golang,
					TypeScript</b>, and microservice architecture.
			</p>
			<p className="about__paragraph">
				I enjoy designing clean, efficient solutions that bridge hardware and software —
				particularly those involving <b className="about__highlight">event-driven systems</b>,
				distributed services, and connected devices.
			</p>
		</section>
	);
}

// -------------------------------------------------------------------------------------------------

function Experience({ hoveredCard, onHoverChange }) {
	return <IotSolutionsCard hoveredCard={hoveredCard} onHoverChange={onHoverChange} />;
}

// -------------------------------------------------------------------------------------------------

function Projects({ hoveredCard, onHoverChange }) {
	return  (
		<>
		<IoTrackLiveCard hoveredCard={hoveredCard} onHoverChange={onHoverChange} />
		<TetrisCard hoveredCard={hoveredCard} onHoverChange={onHoverChange} />
		<ChrisFarrugiaDevCard hoveredCard={hoveredCard} onHoverChange={onHoverChange} />
		</>
	)
}

// -------------------------------------------------------------------------------------------------


function Contact() {

	function openInNewTab() {		

		(async()=>{setTimeout(()=>{window.open('https://github.com/ChrisFarrugiaDev', '_blank');}, 100)})();
		(async()=>{window.open('https://github.com/foxcodenine', '_blank');})();
	
	}

	return (
		<div className='contact'>

			<a href="#" className="contact__item" onClick={()=>{openInNewTab()}}>					
				<svg className="contact__svg">
					<use href="/svg/sprite.svg#icon-github"></use>
				</svg>					
			</a>
			<a href="/cv" target="_blank" className="contact__item">					
				<div className="contact__cv">CV</div>				
			</a>
			<a href="https://www.linkedin.com/in/christopher-farrugia-3a51184b/" target="_blank" className="contact__item">					
				<svg className="contact__svg">
					<use href="/svg/sprite.svg#icon-linkedin"></use>
				</svg>					
			</a>
			<a href="mailto:chris12aug@yahoo.com" className="contact__item" title="chris12aug@yahoo.com">
				<svg className="contact__svg">
					<use href="/svg/sprite.svg#icon-email"></use>
				</svg>
			</a>
		</div>
	)
}
