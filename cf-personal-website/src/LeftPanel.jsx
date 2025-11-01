
import meImage from './assets/profile_picture.jpeg';
import './LeftPanel.scss';

// -------------------------------------------------------------------------------------------------

export default function LeftPanel({ activeSection, onNavClick }) {
	return (
		<section className="left-panel">
			<Header />
			<Nav activeSection={activeSection} onNavClick={onNavClick} />
			<Technologies />
		</section>
	);
}

// -------------------------------------------------------------------------------------------------

function Header() {
	return (
		<header className="header">
			<h1 className="header__title">Christopher Farrugia</h1>
			<h2 className="header__subtitle">Full Stack Developer & Linux Enthusiast</h2>
			<h3 className="header__subtitle header__subtitle--2">Focused on IoT, Microservices, and Real-Time Systems</h3>
			<div className="header__group">
				<img
					src={meImage}
					alt="profile image"
					className="header__image"
				/>
				<p className="header__tagline">
					“I build clean, scalable software — from web interfaces to Linux-powered microservices.”
				</p>
			</div>
		</header>
	);
}

// -------------------------------------------------------------------------------------------------

function Nav({ activeSection, onNavClick }) {
	return (
		<nav className='nav'>
			<ul>
				<li className="nav__list">
					<a
						href="#"
						onClick={() => { onNavClick('about'); }}
						className={`nav__item ${activeSection == 'about' ? 'nav__item--active' : ''}`}
					>
						<span className="nav__line"></span>
						<p className="nav__text">About</p>
					</a>
				</li>

				<li className="nav__list">
					<a
						href="#"
						onClick={() => { onNavClick('experience'); }}
						className={`nav__item ${activeSection == 'experience' ? 'nav__item--active' : ''}`}
					>
						<span className="nav__line"></span>
						<p className="nav__text">Experience</p>
					</a>
				</li>




				<li className="nav__list">
					<a 
						href="#" 
						onClick={() => { onNavClick('projects'); }}
						className={`nav__item ${activeSection == 'projects' ? 'nav__item--active' : ''}`}
					>
						<span className="nav__line"></span>
						<p className="nav__text">Side Projects</p>
					</a>
				</li>

				<li className="nav__list">
					<a 
						href="#" 
						onClick={() => { onNavClick('cv_contact'); }}
						className={`nav__item`}
					>
						<span className="nav__line"></span>
						<p className="nav__text">CV & Contact</p>
					</a>
				</li>



			</ul>
		</nav>
	);
}

// -------------------------------------------------------------------------------------------------

function Technologies() {
	return (
		<section className='tech'>
			<ul className='tech__list'>

				<li className='tech__item'>
					<svg className="tech__svg">
						<use href="/svg/sprite.svg#icon-javascript"></use>
					</svg>
				</li>

				<li className='tech__item'>
					<svg className="tech__svg">
						<use href="/svg/sprite.svg#icon-typescript"></use>
					</svg>
				</li>

				<li className='tech__item'>
					<svg className="tech__svg">
						<use href="/svg/sprite.svg#icon-vue"></use>
					</svg>
				</li>

				<li className='tech__item tech__item--no-border'>
					<svg className="tech__svg">
						<use href="/svg/sprite.svg#icon-react"></use>
					</svg>
				</li>

				<li className='tech__item'>
					<svg className="tech__svg">
						<use href="/svg/sprite.svg#icon-sass"></use>
					</svg>
				</li>

				<li className='tech__item'>
					<svg className="tech__svg">
						<use href="/svg/sprite.svg#icon-node-js"></use>
					</svg>
				</li>

				<li className='tech__item'>
					<svg className="tech__svg">
						<use href="/svg/sprite.svg#icon-php"></use>
					</svg>
				</li>

				<li className='tech__item tech__item--no-border'>
					<svg className="tech__svg">
						<use href="/svg/sprite.svg#icon-laravel"></use>
					</svg>
				</li>

				<li className='tech__item'>
					<svg className="tech__svg">
						<use href="/svg/sprite.svg#icon-go"></use>
					</svg>
				</li>

				<li className='tech__item'>
					<svg className="tech__svg">
						<use href="/svg/sprite.svg#icon-mysql"></use>
					</svg>
				</li>

				<li className='tech__item'>
					<svg className="tech__svg">
						<use href="/svg/sprite.svg#icon-postgresql"></use>
					</svg>
				</li>

				<li className='tech__item tech__item--no-border'>
					<svg className="tech__svg">
						<use href="/svg/sprite.svg#icon-redis"></use>
					</svg>
				</li>

				<li className='tech__item'>
					<svg className="tech__svg">
						<use href="/svg/sprite.svg#icon-mongodb"></use>
					</svg>
				</li>

				<li className='tech__item'>
					<svg className="tech__svg">
						<use href="/svg/sprite.svg#icon-rabbitmq"></use>
					</svg>
				</li>

				<li className='tech__item'>
					<svg className="tech__svg">
						<use href="/svg/sprite.svg#icon-kafka"></use>
					</svg>
				</li>

				<li className='tech__item tech__item--no-border'>
					<svg className="tech__svg">
						<use href="/svg/sprite.svg#icon-docker"></use>
					</svg>
				</li>

				<li className='tech__item'>
					<svg className="tech__svg">
						<use href="/svg/sprite.svg#icon-git"></use>
					</svg>
				</li>

				<li className='tech__item'>
					<svg className="tech__svg">
						<use href="/svg/sprite.svg#icon-apache"></use>
					</svg>
				</li>

				<li className='tech__item'>
					<svg className="tech__svg">
						<use href="/svg/sprite.svg#icon-bash"></use>
					</svg>
				</li>

				<li className='tech__item tech__item--no-border'>
					<svg className="tech__svg">
						<use href="/svg/sprite.svg#icon-linux"></use>
					</svg>
				</li>
			</ul>
		</section>
	);
}
