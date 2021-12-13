<template lang="pug">
  
header.header
  .header__item.header--info
    h2 Bread Liberia {{miU}}

  .header__item.header--sing
    b-login-card

</template>


<script>
//Simport { mapState } from 'vuex'
import BLoginCard from './BLoginCard.vue'
export default {
  name: 'BHeader',
  components:{
    BLoginCard
  },
  computed: {
    
  }
}
</script>

<style lang="sass" scoped>

  @import '../assets/sass/components/BHeader/skeleton'
  @import '../assets/sass/components/BHeader/skin'


</style>