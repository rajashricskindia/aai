<template>
  <section id="about" class="container">
    <h2>Visit Our Showroom</h2>
    <div class="showroom-inner">
      <div class="showroom-text">
        <h3>अष्टविनायक Automobile</h3>
        <p class="muted">Ashtavinayak Automobile, Near Maruti Suzuki Showroom, Darwha Road, Lohara, Yavatmal</p>
        <p class="muted">Phone: 8378973840</p>
      </div>
      <div class="showroom-actions">
        <a class="btn-ghost" href="https://www.google.com/maps/search/?api=1&query=Ashtavinayak+Automobile%2C+Near+Maruti+Suzuki+Showroom%2C+Darwha+Road%2C+Lohara%2C+Yavatmal" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
        <a class="btn-primary" href="tel:8378973840">Call Now</a>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.muted{color:var(--muted)}
.showroom-inner{
  display:flex;
  gap:18px;
  align-items:center;
  flex-wrap:wrap;
}
.showroom-text{flex:1;min-width:220px}
.showroom-actions{
  display:flex;
  gap:8px;
  flex-wrap:wrap;
}

@media (max-width:768px){
  .showroom-inner{
    flex-direction:column;
    align-items:stretch;
    text-align:center;
  }
  .showroom-actions{
    justify-content:center;
    width:100%;
  }
}

@media (max-width:480px){
  .showroom-actions{
    flex-direction:column;
    width:100%;
  }
  .showroom-actions a{
    width:100%;
    text-align:center;
    box-sizing:border-box;
  }
}
</style>
