<template>
  <main class="page-shell">
    <section class="hero-card">
      <div class="hero-copy">
        <p class="eyebrow">Electric Mobility • Premium Dealership</p>
        <h1>Welcome to Ashtavinayak Automobile Industries</h1>
        <p class="lead">
          We proudly bring you the future of travel with the BGauss electric scooter — stylish,
          efficient, and built for modern city life.
        </p>

        <a
          class="whatsapp-btn"
          href="https://wa.me/919999999999?text=Hi%20I%20would%20like%20to%20book%20a%20test%20drive"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 2.5a9.5 9.5 0 0 0-8.17 14.31L2.5 21.5l5.2-1.3A9.5 9.5 0 1 0 12 2.5Zm0 17.3a7.8 7.8 0 0 1-3.95-1.08l-.28-.17-3.08.77.82-3L6.2 15.3A7.8 7.8 0 1 1 12 19.8Zm4.53-5.77c-.25-.13-1.47-.72-1.7-.81-.23-.08-.4-.13-.56.13-.17.26-.65.81-.8 1-.15.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.26-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.15.16-.26.25-.43.08-.17.04-.32-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.4-.42-.56-.43h-.47c-.16 0-.42.06-.64.32-.22.26-.84.82-.84 2s.86 2.32  .98 2.48c.12.16 1.7 2.61 4.14 3.56.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.09-.22-.15-.47-.28Z"
            />
          </svg>
          Say Hi
        </a>
      </div>

      <div class="visual-panel">
        <div class="image-placeholder">
          <span>BGAUSS EV Scooter</span>
          <small>Image placeholder for showroom vehicle photos</small>
        </div>
        <div class="address-card">
          <h2>Visit our showroom</h2>
          <p>Near Maruti Suzuki Showroom, Darwha road, Lohara, Yavatmal 445001</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
</script>

<style scoped>
:global(body) {
  margin: 0;
  font-family: Inter, 'Segoe UI', Roboto, Arial, sans-serif;
  background: linear-gradient(135deg, #0f172a, #1e3a8a 65%, #f59e0b);
  color: #f8fafc;
}

* {
  box-sizing: border-box;
}

.page-shell {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.hero-card {
  width: min(1100px, 100%);
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 24px;
  background: rgba(15, 23, 42, 0.88);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 25px 60px rgba(2, 6, 23, 0.35);
  border-radius: 28px;
  padding: 32px;
  backdrop-filter: blur(12px);
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-size: 0.8rem;
  color: #fbbf24;
  font-weight: 700;
  margin-bottom: 8px;
}

h1 {
  font-size: clamp(2rem, 3vw, 3rem);
  margin: 0 0 12px;
  line-height: 1.1;
}

.lead {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #dbeafe;
  margin-bottom: 22px;
}

.whatsapp-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: 999px;
  background: linear-gradient(90deg, #25d366, #128c7e);
  color: white;
  text-decoration: none;
  font-weight: 700;
  box-shadow: 0 14px 28px rgba(37, 211, 102, 0.25);
}

.whatsapp-btn svg {
  width: 22px;
  height: 22px;
  fill: currentColor;
}

.visual-panel {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.image-placeholder {
  min-height: 240px;
  border-radius: 20px;
  border: 2px dashed rgba(255, 255, 255, 0.35);
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.28), rgba(34, 211, 238, 0.18));
  display: grid;
  place-items: center;
  text-align: center;
  padding: 16px;
}

.image-placeholder span {
  font-size: 1.25rem;
  font-weight: 700;
}

.image-placeholder small {
  margin-top: 8px;
  color: #e2e8f0;
}

.address-card {
  padding: 18px 20px;
  border-radius: 20px;
  background: linear-gradient(135deg, #f59e0b, #f97316);
  color: #111827;
  box-shadow: 0 16px 30px rgba(249, 115, 22, 0.2);
}

.address-card h2 {
  margin: 0 0 8px;
  font-size: 1.15rem;
}

.address-card p {
  margin: 0;
  line-height: 1.6;
  font-weight: 600;
}

@media (max-width: 840px) {
  .hero-card {
    grid-template-columns: 1fr;
  }
}
</style>
