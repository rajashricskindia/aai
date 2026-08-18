<template>
  <div class="page-shell">
    <Navbar />

    <HeroSection />

    <ScooterGrid />

    <section id="features" class="container">
      <h2>Features</h2>
      <p class="lead">Modern EV features built for daily riding comfort and convenience.</p>
      <div class="features">
        <FeatureCard icon="⚡" title="Long Range" text="Optimized battery for city-to-city rides." />
        <FeatureCard icon="🔋" title="Powerful Motor" text="Responsive acceleration and torque." />
        <FeatureCard icon="⚡️" title="Fast Charging" text="Get back on the road quickly." />
        <FeatureCard icon="📱" title="Smart Connectivity" text="Bluetooth & app features." />
        <FeatureCard icon="🧭" title="Digital Display" text="Clear, modern instrument cluster." />
        <FeatureCard icon="💺" title="Comfortable Seating" text="Ergonomic for rider and pillion." />
        <FeatureCard icon="🛡️" title="Advanced Safety" text="Modern braking & stability." />
        <FeatureCard icon="💸" title="Low Running Cost" text="Economical ownership." />
      </div>
    </section>

    <WhyChooseUs />

    <TestRideCTA />

    <ShowroomSection />

    <ContactForm />

    <Footer />

    <WhatsAppButton />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import ScooterGrid from './components/ScooterGrid.vue'
import FeatureCard from './components/FeatureCard.vue'
import WhyChooseUs from './components/WhyChooseUs.vue'
import TestRideCTA from './components/TestRideCTA.vue'
import ShowroomSection from './components/ShowroomSection.vue'
import ContactForm from './components/ContactForm.vue'
import Footer from './components/Footer.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
</script>

<style>
/* Global minor adjustments live in src/assets/styles.css */
:root{--accent:#0ea5e9}
</style>
