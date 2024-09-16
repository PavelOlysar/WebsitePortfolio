<template>
  <div id="app">
    <header>
      <NavBar />
      <HeroSection />
      <ModeToggle />
    </header>
    <main>
      <ProjectsSection />
    </main>
  </div>
</template>

<script setup>
// Header
import NavBar from './components/header/NavBar.vue';
import HeroSection from './components/header/HeroSection.vue';
import ModeToggle from './components/header/ModeToggle.vue';

// Main
import ProjectsSection from './components/main/ProjectsSection.vue';

</script>

<style lang="scss">
#app {
  width: 100%;
  background-color: $background-color;

  header {
    height: 100vh;
  }
}
</style>
