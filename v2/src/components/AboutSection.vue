<template>
  <section id="about" class="section">
    <div class="section__label">About</div>

    <div class="about">
      <p class="about__p"> I'm a backend and cloud-oriented developer with <strong>nearly 4 years of professional
          experience</strong> building and maintaining production systems for real-world environments.</p>
      <p class="about__p"> Most of my work lives where <strong>hardware meets software</strong> — real-time IoT
        platforms that process TCP/UDP telemetry from thousands of connected devices, along with the messaging,
        microservices, and APIs that keep them running reliably at scale. </p>
      <p class="about__p"> My core stack is <strong>Go, TypeScript/Node.js, and Vue.js</strong>, backed by PostgreSQL,
        Redis, and RabbitMQ, and deployed on Docker and Linux. I care most about clean service architecture and systems
        that stay reliable under load. </p>
      <p class="about__p"> Right now I'm focused on <strong>AWS and cloud-native backend engineering</strong> — working
        hands-on with Terraform and moving deeper into the infrastructure and event-driven systems that connect
        hardware, software, and real-time data. </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;

.section {
  margin-bottom: 6rem;
}

.section__label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: $text-2;
  margin-bottom: 1.5rem;
  display: none;

  @media (max-width: 1024px) {
    display: block;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  }
}

.about {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about__p {
  font-size: 0.85rem;
  color: $text-2;
  line-height: 1.65;

  strong {
    color: $text-1;
    font-weight: 500;
  }
}
</style>
