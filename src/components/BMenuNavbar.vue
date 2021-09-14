<template lang="pug">
ul.menu
  li(v-for="m in menuItems").menu__item
    router-link(:to="m.link" @click="close()").menu__link
      |{{m.name}}
</template>

<script>
export default {
  name: 'BMenuNavbar',
  data () {
    return {
      menuItems : [
        {name: 'Inicio', link: '/'},
        {name: 'Sobre nosotros', link: ''},
        {name: 'Productos', link: '/products'},
        {name: 'Contacto', link: ''}
        ],
        props:{isMenuOpen: { type: Boolean, required: true},
    },
    }
  },

  methods: {

    close(){
      this.$emit('onClose')
    }

  }

}
</script>

<style lang="sass" scoped>

  @import '../assets/sass/components/BMenuNavbar/skeleton'
  @import '../assets/sass/components/BMenuNavbar/skin'

</style>