import { useEffect, useRef } from 'react';
import './RightPanel.scss';
import { useSectionSpy } from './hooks/useSectionSpy';

export default function RightPanel({onActiveSection, scrollToSection}) {
	const containerRef = useRef(null);

	const { activeSection, register } = useSectionSpy(containerRef, {
		rootMargin: '30px 0px -70% 0px',
		initial: 'about',
		// onChange: (key) => console.log('active:', key), // optional
	});

	useEffect(() => {		
		onActiveSection(activeSection)
	}, [activeSection])

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

	return (
		<section id="about" className="right-panel" ref={containerRef}>

			<div className="section-title" data-section="about" ref={register('about')}>
				About
			</div>
			<About />

			<div id="experience" className="section-title" data-section="experience" ref={register('experience')}>
				Experience
			</div>
			<Experience />


		</section>
	);
}


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
				across both front-end and back-end technologies, including <b className="about__highlight"> Vue.js, Node.js, Laravel,
					PostgreSQL/MySQL, Redis, RabbitMQ, Docker, and Linux</b> server administration.
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

function Experience() {
	return <ExperienceCard />;
}

function ExperienceCard() {
	return (
		<div className="experience-card">
			<h3 className="experience-card__dates">2022 — Present</h3>
			<h2 className="experience-card__title">Lead Software Developer · IoT Solutions</h2>
			<p className="experience-card__description">
				Lead Software Developer and, for the first two and a half years, the sole developer at IoT Solutions.
				Responsible for designing, building, and maintaining the company’s IoT and fleet-management platform —
				spanning server management, backend logic, microservices, and frontend integration.
			</p>
			<p className="experience-card__description">
				Developed real-time data pipelines for connected devices, including Teltonika trackers and custom
				parking and level sensors. Each device runs a Linux-based parser that receives TCP/UDP payloads,
				decodes them, and forwards structured telemetry through RabbitMQ and Kafka, with Redis used for caching
				and synchronization.
			</p>
			<p className="experience-card__description">
				Worked on the cloud integration of the in-house IoTPro sensor line — covering temperature, humidity,
				pressure, radar, and generator sensors. Built cloud parsers, managed FOTA updates, downlinks, and uplinks,
				and integrated everything with ThingsBoard and our tracking platform using REST APIs and Redis caching
				for real-time visualization and control.
			</p>
			<p className="experience-card__description">
				Collaborated on external projects such as machine data collection for the Malta Gaming Authority, and
				built a lightweight Laravel dashboard for Marine Hound to visualize harbour-emission data (SO₂, and
				CO₂ levels).
			</p>
			<p className="experience-card__description">
				Also manage Linux servers, Docker deployments, SSL configuration, and system monitoring — ensuring the
				reliability and scalability of production environments.
			</p>
			<div className="experience-card__links">
				<a href="https://track.iotsolutions.com.mt/" target="_blank" className="experience-card__group">
					<svg><use href="/svg/sprite.svg#icon-link"></use></svg>
					<span>track.iotsolutions.com.mt</span>
				</a>
				<a href="https://www.iotsolutions.com.mt/" target="_blank" className="experience-card__group">
					<svg><use href="/svg/sprite.svg#icon-link"></use></svg>
					<span>IoT-Solutions</span>
				</a>
			</div>
		</div>
	);
}
