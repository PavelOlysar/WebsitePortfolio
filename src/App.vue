<template>
  <div id="app">
    <header>
      <NavBar />
      <HeroSection />
      <ModeToggle />
    </header>
    <main>

    </main>
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue';
import ModeToggle from './components/ModeToggle.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection,
    ModeToggle
  }
};
</script>

<style lang="scss">
#app {
  width: 100%;
  background-color: $main-white;

  header {
    height: 100vh;
  }
}
</style>
