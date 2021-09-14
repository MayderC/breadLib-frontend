<template lang="pug">

main(@click="").main.no-select
  .main__title()
    h1 Lista de Productos
  .main__body
    b-product-card(v-for="p in products" :bread="p")
</template>


<script>
import BProductCard from '../components/product-card/BProductCard.vue'
import {getAllProducts} from '../api/Products'

export default {
  name: 'Bproducts',
  components: {
    BProductCard
  },
  data () {
    return {
      products : [],
      hola : undefined
    }
  },

  methods: {

  },
  created() {
    getAllProducts().then(response => this.products = response)
    .catch(err => console.log(err))
  }
}
</script>
<style lang="sass" scoped>


  @import '../assets/sass/views/BProducts/skeleton'
  @import '../assets/sass//views/BProducts/skin'
</style>