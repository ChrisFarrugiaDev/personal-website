import meImage from './assets/profile_picture.jpeg';
import './LeftPanel.scss';

export default function LeftPanel() {
    return (
        <section className="left-panel">
            <Header></Header>
            <Nav></Nav>
            <Technologies></Technologies>
        </section>
    )
}


function Header() {
    return (
        <header className="header">
            <h1 className="header__title">Christopher Farrugia</h1>
            <h2 className="header__subtitle">Full Stack Developer & Linux Enthusiast</h2>
            <img
                src={meImage}
                alt="profile image"
                className="header__image"
            />
            <p className="header__tagline">
                “I build clean, scalable software — from web interfaces to Linux-powered microservices.”
            </p>
        </header>
    );
}

function Nav() {
    return (
        <nav className='nav'>
            <ul>
                <li className="nav__list">
                    <a href="#" className="nav__item ">
                        <span className="nav__line"></span>
                        <p className="nav__text">About</p>
                    </a>
                </li>
                <li className="nav__list">
                    <a href="#" className="nav__item nav__item--active">
                        <span className="nav__line"></span>
                        <p className="nav__text">Experience</p>
                    </a>
                </li>
                <li className="nav__list">
                    <a href="#" className="nav__item">
                        <span className="nav__line"></span>
                        <p className="nav__text">Projects</p>
                    </a>
                </li>
                <li className="nav__list">
                    <a href="#" className="nav__item">
                        <span className="nav__line"></span>
                        <p className="nav__text">Github</p>
                    </a>
                </li>
                <li className="nav__list">
                    <a href="#" className="nav__item">
                        <span className="nav__line"></span>
                        <p className="nav__text">Contacts</p>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

function Technologies() {
    return (
        <section className='tech'>
            <ul className='tech__list'>

                <li className='tech__item'>
                    <svg class="tech__svg">
                        <use href="/svg/sprite.svg#icon-javascript"></use>
                    </svg>
                </li>
                <li className='tech__item'>
                    <svg class="tech__svg">
                        <use href="/svg/sprite.svg#icon-typescript"></use>
                    </svg>
                </li>
                <li className='tech__item'>
                    <svg class="tech__svg">
                        <use href="/svg/sprite.svg#icon-vue"></use>
                    </svg>
                </li>
                <li className='tech__item '>
                    <svg class="tech__svg">
                        <use href="/svg/sprite.svg#icon-react"></use>
                    </svg>
                </li>
                <li className='tech__item'>
                    <svg class="tech__svg">
                        <use href="/svg/sprite.svg#icon-sass"></use>
                    </svg>
                </li>
                <li className='tech__item'>
                    <svg class="tech__svg">
                        <use href="/svg/sprite.svg#icon-node-js"></use>
                    </svg>
                </li>
                <li className='tech__item'>
                    <svg class="tech__svg">
                        <use href="/svg/sprite.svg#icon-php"></use>
                    </svg>
                </li>
                <li className='tech__item'>
                    <svg class="tech__svg">
                        <use href="/svg/sprite.svg#icon-laravel"></use>
                    </svg>
                </li>
                <li className='tech__item'>
                    <svg class="tech__svg">
                        <use href="/svg/sprite.svg#icon-go"></use>
                    </svg>
                </li>
                <li className='tech__item'>
                    <svg class="tech__svg">
                        <use href="/svg/sprite.svg#icon-mysql"></use>
                    </svg>
                </li>
                <li className='tech__item'>
                    <svg class="tech__svg">
                        <use href="/svg/sprite.svg#icon-postgresql"></use>
                    </svg>
                </li>
                <li className='tech__item'>
                    <svg class="tech__svg">
                        <use href="/svg/sprite.svg#icon-redis"></use>
                    </svg>
                </li>
                <li className='tech__item'>
                    <svg class="tech__svg">
                        <use href="/svg/sprite.svg#icon-mongodb"></use>
                    </svg>
                </li>
                <li className='tech__item'>
                    <svg class="tech__svg">
                        <use href="/svg/sprite.svg#icon-rabbitmq"></use>
                    </svg>
                </li>
                <li className='tech__item'>
                    <svg class="tech__svg">
                        <use href="/svg/sprite.svg#icon-kafka"></use>
                    </svg>
                </li>
                <li className='tech__item'>
                    <svg class="tech__svg">
                        <use href="/svg/sprite.svg#icon-docker"></use>
                    </svg>
                </li>
                <li className='tech__item'>
                    <svg class="tech__svg">
                        <use href="/svg/sprite.svg#icon-git"></use>
                    </svg>
                </li>
                <li className='tech__item'>
                    <svg class="tech__svg">
                        <use href="/svg/sprite.svg#icon-apache"></use>
                    </svg>
                </li>
                {/* <li className='tech__item'>
                    <svg class="tech__svg">
                        <use href="/svg/sprite.svg#icon-bash"></use>
                    </svg>
                </li> */}
                <li className='tech__item tech__item--no-border'>
                    <svg class="tech__svg">
                        <use href="/svg/sprite.svg#icon-linux"></use>
                    </svg>
                </li>


            </ul>
        </section>
    )
}