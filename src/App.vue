<template lang="pug">
b-navbar
router-view
b-footer(v-if="isLogin")
</template>

<script>
import BNavbar from './components/BNavbar.vue'
import BHome from './views/BHome.vue'
import BFooter from './components/BFooter.vue'
import {mapState} from 'vuex'
export default {
  name: 'App',
  components: {
    BHome,
    BNavbar,
    BFooter
  },
  computed : {
    ...mapState(['isLogin'])
  }
}
</script>
<style lang="sass">
  @import '~bulma/css/bulma.css'
</style>
<style lang="sass" src="./assets/sass/variables.sass"></style>
<style lang="sass" src="./assets/sass/main.sass"></style>