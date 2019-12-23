<template>
  <div id="app">
      <router-link to="/">Home</router-link> |
      <router-link to="/play">Play</router-link>
  <Header />
    <router-view/>
  <Footer />

  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'app',

  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
