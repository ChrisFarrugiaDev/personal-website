export function IotSolutionsCard({ hoveredCard, onHoverChange }) {


	return (
		<div
			className={`card ${hoveredCard === 'iotsolutions'
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
				Lead Software Developer and, for the first two and a half years, the sole developer working on the 
				company's IoT and fleet-management platform. Owned system design, backend services, microservices,
				frontend integration, and Linux-based infrastructure.
			</p>

			<p className="card__description">
				Built real-time data pipelines for connected devices including Teltonika trackers and custom parking and
				level sensors. Developed Linux-based parsers to receive TCP/UDP payloads, decode telemetry, and forward
				structured data through RabbitMQ and Kafka, with Redis used for caching and synchronization.
			</p>

			<p className="card__description">
				Worked on the cloud integration of the in-house IoTPro sensor line, covering temperature, humidity,
				pressure, radar, and generator sensors. Built cloud parsers, handled FOTA updates, downlinks, and uplinks,
				and integrated the devices with ThingsBoard and the company's tracking platform using REST APIs, RabbitMQ and Kafka.
			</p>

			<p className="card__description">
				Contributed to external projects including machine data collection for the Malta Gaming Authority and a
				Laravel dashboard for Marine Hound to visualise harbour-emission data. Also managed Linux servers, Docker
				deployments, SSL configuration, and monitoring to help keep production systems reliable and scalable.
			</p>

			<div className="card__links">
				<a href="https://track.iotsolutions.com.mt/" target="_blank" className="card__group">
					<svg><use href="/svg/sprite.svg#icon-link"></use></svg>
					<span>track.iotsolutions.com.mt</span>
				</a>
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
			className={`card ${hoveredCard === 'iotrack.live'
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
				Real-time fleet and IoT management platform built for real-time tracking, telemetry, and operational 
				visibility across vehicles, assets, and connected devices.
			</p>

			<p className="card__description">
				Includes live maps, custom dashboards, real-time data flows, and device monitoring, with backend services 
				focused on messaging, telemetry processing, and scalable real-time data flows.
			</p>

			<p className="card__description">
				Built with a microservice architecture using Go, TypeScript, PostgreSQL, Redis, RabbitMQ, Socket.IO, and
				Teltonika integrations for real-time ingestion, synchronisation, and analytics.
			</p>

			<div className="card__tech">
				{tech.map(t => <div key={t}>{t}</div>)}

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
			className={`card ${hoveredCard === 'tetris'
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
				<svg className="card__arrow">
					<use href="/svg/sprite.svg#icon-link-arrow"></use>
				</svg>
			</a>

			<p className="card__description">
				A small side project built for fun and to explore game development in Go.
			</p>

			<p className="card__description">
				A minimalist, retro-style remake of the classic Tetris game, built entirely in Go using Ebiten for graphics and audio.
			</p>

			<p className="card__description">
				Includes music, sound effects, smooth controls, scoring, and dynamic in-game messages for a nostalgic arcade feel.
			</p>

			<div className="card__links">

				<a href="/tetris-linux" className="card__group" >
					<svg><use href="/svg/sprite.svg#icon-link"></use></svg>
					<span>Download (Linux)</span>
				</a>

				<a href="/tetris-windows" className="card__group" >
					<svg><use href="/svg/sprite.svg#icon-link"></use></svg>
					<span>Download (Windows)</span>
				</a>

			</div>

			<div className="card__tech">
				{tech.map(t => <div key={t}>{t}</div>)}
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
			className={`card ${hoveredCard === 'chris_farrugia_dev'
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
				Personal portfolio website built in React and SCSS to showcase my work, projects, and experience as a backend / full-stack software developer.
			</p>

			<p className="card__description">
				Frontend implementation based closely on an existing portfolio design, recreated in React and adapted with my own content, projects, and structure.
			</p>

			<p className="card__description">
				Includes responsive layout, smooth section transitions, interactive UI details, and a component-based frontend structure.
			</p>

			<div className="card__links">

				<a href="https://brittanychiang.com/#about" target="_blank"
					className="card__group"

				>
					<svg><use href="/svg/sprite.svg#icon-link"></use></svg>
					<span>Original design reference: Brittany Chiang</span>
				</a>


			</div>

			<div className="card__tech">
				{tech.map(t => <div key={t}>{t}</div>)}

			</div>
		</div>
	);
}

export function ChessLogDevCard({ hoveredCard, onHoverChange }) {

	const tech = [
		"Golang",
		"Vue 3",
		"TypeScript",
		"PostgreSQL",
		"JWT",
		"SASS",
		"Zod",
		"Email Templates",
		"Systemd",
		"Apache Reverse Proxy",
	];

	return (
		<div
			className={`card ${hoveredCard === 'chesslog'
					? 'is-hovered'
					: hoveredCard && hoveredCard !== 'chesslog'
						? 'is-dimmed'
						: ''
				}`}
			onMouseEnter={() => { onHoverChange('chesslog'); }}
			onMouseLeave={() => { onHoverChange(false); }}
			onClick={(e) => openInNewTab(e, 'https://chesslog.chrisfarrugia.dev/')}
		>

			{/* Preview image of the SPA */}
			<img className="card__image" src="/images/chesslog.png" alt="ChessLog App Screenshot" />

			<a className="card__title">
				ChessLog
				<svg className="card__arrow">
					<use href="/svg/sprite.svg#icon-link-arrow"></use>
				</svg>
			</a>

			<p className="card__description">
				Personal chess study platform built with Go and Vue 3 for storing games, organising opening repertoires, and replaying analysed moves through a fast, clean interface.
			</p>

			<p className="card__description">
				Includes authentication features such as email verification, password resets, and secure JWT-based sessions, making it a complete full-stack application rather than just a frontend prototype.
			</p>

			<p className="card__description">
				Served through a Go SPA handler and deployed behind Apache as a reverse proxy, with systemd used to keep the application running reliably in production.
			</p>

			<div className="card__tech">
				{tech.map(t => <div key={t}>{t}</div>)}
			</div>
		</div>
	);
}



function openInNewTab(e, url) {

	if (e.target.closest(".card__links")) return;
	window.open(url, '_blank');
}