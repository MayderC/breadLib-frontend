<template lang="pug">

nav.navbar
  .navbar__item.navbar__item--logo
    .navbar__img
      img(src="../assets/img/bakery.svg")
    .navbar__text
      h1  Bread-Lib

  <!-- mini componente de Menu, se manda como prop, isMenuOpen-->
  <!-- para que este tambien controle cuando cerrar el menu, -->
  <!-- el menu se cierra con cada click en menu__link de b-navbar-menu -->

  b-menu-navbar(:isMenuOpen = "isMenuOpen" @onClose="isMenuOpen = !isMenuOpen" ).navbar__item.navbar__menu#menu
  .navbar__btn#btn-menu(@click="isMenuOpen = !isMenuOpen")
    img(src="../assets/img/bread_1.svg")
    

</template>


<script>


import BMenuNavbar from './BMenuNavbar.vue'

export default {
  name: 'BNavbarMenu',
  data()  {
    return {
      //is menuopen controle la funcion que pone las clases para mostrar el menu movil
      isMenuOpen : false
    }
  },
  components: {
    BMenuNavbar
  },

  methods: {
    // metodo llamada cuando cambia el valor de is open a True or false
    // para mostrar o ocultar el menu
    buttomResponsive(){
      const btn = document.getElementById('btn-menu')
      const menu = document.getElementById('menu')


      menu.classList.toggle('menu-active')
      btn.classList.toggle('rotate-btn')
    }
  },
  watch:{
    // wacht a is open, que cambia el el template, con @onclick
    //cada ve que cambbia ejecuta el metodo buttomResponsive()
    isMenuOpen(){
      this.buttomResponsive()

      return !this.isMenuOpen
    }
  }
}
</script>

<style lang="sass" scoped>

  @import '../assets/sass/components/BNavBar/skeleton'
  @import '../assets/sass/components/BNavBar/skin'

</style>