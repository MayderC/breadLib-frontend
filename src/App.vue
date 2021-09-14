<template lang="pug">
b-navbar
router-view
b-footer
</template>

<script>
import BNavbar from './components/BNavbar.vue'
import BHome from './views/BHome.vue'
import BFooter from './components/BFooter.vue'
export default {
  name: 'App',
  components: {
    BHome,
    BNavbar,
    BFooter
  }
}
</script>

<style lang="sass" src="./assets/sass/variables.sass"></style>
<style lang="sass" src="./assets/sass/main.sass"></style>