import './RightPanel.scss'

export default function RightPanel() {
  return (
    <section className="right-panel">
      <About></About>
    </section>
  )
}


function About() {
  return (
    <>
      <h2 className="right-panel__title">About</h2>
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
    </>


  )
}