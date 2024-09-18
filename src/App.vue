<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode }">
    <header>
      <NavBar />
      <HeroSection />
      <ModeToggle @toggle-mode="toggleDarkMode" />
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

// Functions
import { useTheme } from './composables/useTheme';

const { isDarkMode, toggleDarkMode } = useTheme();
</script>

<style lang="scss">
#app {
  width: 100%;

  transition: all 0.3s ease-in-out;

  @include themed();

  &.dark-mode {
    @include dark-mode();
  }

  header {
    height: 100vh;
  }
}
</style>
