export function IotSolutionsCard({ hoveredCard, onHoverChange }) {


	return (
		<div
			className={`card ${
				hoveredCard === 'iotsolutions'
					? 'is-hovered'
					: hoveredCard && hoveredCard !== 'iotsolutions'
					? 'is-dimmed'
					: ''
			}`}
			onMouseEnter={() => { onHoverChange('iotsolutions'); }}
			onMouseLeave={() => { onHoverChange(false); }}
			onClick={(e) => openInNewTab(e, 'https://www.iotsolutions.com.mt/')}
		>
			<h3 className="card__dates">2022 — Present</h3>
			<h2 className="card__title">
				Lead Software Developer · IoT Solutions 
				<svg className="card__arrow"> <use href="/svg/sprite.svg#icon-link-arrow"></use> </svg>
			</h2>

			<p className="card__description">
				Lead Software Developer and, for the first two and a half years, the sole developer at IoT Solutions.
				Responsible for designing, building, and maintaining the company’s IoT and fleet-management platform —
				spanning server management, backend logic, microservices, and frontend integration.
			</p>

			<p className="card__description">
				Developed real-time data pipelines for connected devices, including Teltonika trackers and custom
				parking and level sensors. Each device runs a Linux-based parser that receives TCP/UDP payloads,
				decodes them, and forwards structured telemetry through RabbitMQ and Kafka, with Redis used for caching
				and synchronization.
			</p>

			<p className="card__description">
				Worked on the cloud integration of the in-house IoTPro sensor line — covering temperature, humidity,
				pressure, radar, and generator sensors. Built cloud parsers, managed FOTA updates, downlinks, and uplinks,
				and integrated everything with ThingsBoard and our tracking platform using REST APIs and Redis caching
				for real-time visualization and control.
			</p>

			<p className="card__description">
				Collaborated on external projects such as machine data collection for the Malta Gaming Authority, and
				built a lightweight Laravel dashboard for Marine Hound to visualize harbour-emission data (SO₂, and
				CO₂ levels).
			</p>

			<p className="card__description">
				Also manage Linux servers, Docker deployments, SSL configuration, and system monitoring — ensuring the
				reliability and scalability of production environments.
			</p>

			<div className="card__links">
				<a href="https://track.iotsolutions.com.mt/" target="_blank" className="card__group" >
					<svg> <use href="/svg/sprite.svg#icon-link"></use> </svg>
					<span>track.iotsolutions.com.mt</span>
				</a>

				{/* <a href="https://www.iotsolutions.com.mt/" target="_blank" className="card__group" >
					<svg> <use href="/svg/sprite.svg#icon-link"></use> </svg>
					<span>IoT-Solutions</span>
				</a> */}
			</div>
		</div>
	);
}

// -------------------------------------------------------------------------------------------------

export function IoTrackLiveCard({ hoveredCard, onHoverChange }) {


	const tech = [
		"Vue 3",
		"TypeScript",
		"Golang",
		"Node.js",
		"Fastify",
		"Prisma",
		"PostgreSQL",
		"Redis",
		"RabbitMQ",
		"Socket.IO",
		"Zod",
		"Docker",
		"SASS"
	];

	return (
			<div 
				className={`card ${
					hoveredCard === 'iotrack.live'
						? 'is-hovered'
						: hoveredCard && hoveredCard !== 'iotrack.live'
						? 'is-dimmed'
						: ''
				}`}
				onMouseEnter={() => { onHoverChange('iotrack.live'); }}
				onMouseLeave={() => { onHoverChange(false); }}
				onClick={(e) => openInNewTab(e, 'http://iotrack.live/login')}
			>
		
			<img className="card__image" src="/images/iotrack_live.png" alt="iotrack.live" />

			<a className="card__title">
				iotrack.live				
				<svg className="card__arrow"> <use href="/svg/sprite.svg#icon-link-arrow"></use> </svg>
			</a>

			<p className="card__description">
				Smart fleet and IoT management platform designed for real-time tracking, telemetry, and analytics.
				Monitor vehicles, assets, and IoT devices with live maps, customizable dashboards, and intelligent data visualization.
			</p>

			<p className="card__description">
				Built with a microservice architecture integrating Teltonika devices, message queues, and efficient cloud infrastructure.
			</p>

			<div className="card__tech">
				{tech.map(t =><div key={t}>{t}</div>)}

			</div>
		</div>
	);
}


export function TetrisCard({ hoveredCard, onHoverChange }) {


	const tech = [
		"Golang",
		"Ebiten",
		"Go Audio",
		"Embed FS"
	];

	return (
			<div 
				className={`card ${
					hoveredCard === 'tetris'
						? 'is-hovered'
						: hoveredCard && hoveredCard !== 'tetris'
						? 'is-dimmed'
						: ''
				}`}
				onMouseEnter={() => { onHoverChange('tetris'); }}
				onMouseLeave={() => { onHoverChange(false); }}
				onClick={(e) => openInNewTab(e, 'https://github.com/foxcodenine/tutorials/tree/master/go.dev_doc_articles/go_tetris')}
			>
		
			<img className="card__image card__image--tetris" src="/images/tetris.png" alt="tetris game" />

			<a className="card__title">
				Tetris (Built with Go)				
				<svg className="card__arrow"> <use href="/svg/sprite.svg#icon-link-arrow"></use> </svg>
			</a>

			<p className="card__description">
				This isn’t my normal build… but who can say no to Tetris?				
			</p>
			<p className="card__description">				
				A minimalist, retro-style remake of the classic Tetris game — built entirely in Go with Ebiten for graphics and audio.
			</p>

			<p className="card__description">
				Includes music, sound effects, smooth controls, scoring, and dynamic messages for a nostalgic arcade feel
			</p>

			<div className="card__links">

				<a href="/tetris-linux"  className="card__group" >
					<svg><use href="/svg/sprite.svg#icon-link"></use></svg>
					<span>Download (Linux)</span>
				</a>

				<a href="/tetris-windows"  className="card__group" >
					<svg><use href="/svg/sprite.svg#icon-link"></use></svg>
					<span>Download (Windows)</span>
				</a>
	
			</div>

			<div className="card__tech">
				{tech.map(t =><div key={t}>{t}</div>)}
			</div>
		</div>
	);
}



export function ChrisFarrugiaDevCard({ hoveredCard, onHoverChange }) {

        const tech = [
            "React",
            "SCSS",
            "Vite",
            "BEM",
            "Custom Hooks",
            "IntersectionObserver",
            "CSS Grid"
        ];

    	return (
			<div 
				className={`card ${
					hoveredCard === 'chris_farrugia_dev'
						? 'is-hovered'
						: hoveredCard && hoveredCard !== 'chris_farrugia_dev'
						? 'is-dimmed'
						: ''
				}`}
				onMouseEnter={() => { onHoverChange('chris_farrugia_dev'); }}
				onMouseLeave={() => { onHoverChange(false); }}
				onClick={(e) => openInNewTab(e, 'https://chrisfarrugia.dev/')}
			>
		
			<img className="card__image " src="/images/chris_farrugia_dev.png" alt="personal_web" />

			<a className="card__title">
				chrisfarrugia.dev				
				<svg className="card__arrow"> <use href="/svg/sprite.svg#icon-link-arrow"></use> </svg>
			</a>

			<p className="card__description">
				A minimalist, responsive portfolio website built to showcase my work, projects, and experience as a 
                full-stack developer.				
			</p>
			<p className="card__description">				
				Designed and developed entirely from scratch using React, SCSS, and a component-based architecture 
                inspired by Brittany Chiang’s style.
			</p>

			<p className="card__description">
				Features smooth section transitions, interactive mouse-trail effects, and a clean layout.
			</p>

			<div className="card__links">

				<a href="https://brittanychiang.com/#about" target="_blank"
					className="card__group"
				
				>
					<svg><use href="/svg/sprite.svg#icon-link"></use></svg>
					<span>Design inspired by Brittany Chiang</span>
				</a>

	
			</div>

			<div className="card__tech">
				{tech.map(t =><div key={t}>{t}</div>)}

			</div>
		</div>
	);
}


function openInNewTab(e, url) {		
	
    if (e.target.closest(".card__links") ) return;
    window.open(url, '_blank');
}