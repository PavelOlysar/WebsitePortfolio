<template>
  <div id="app">
    <header>
      <NavBar />
      <HeroSection />
    </header>
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection
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
