<template lang="pug">

.card-login
  form.form-login
    .subtitles
      router-link(to="/").form__subtitle Iniciar Sesión
      router-link(to="/").form__subtitle Registrarse
    .field
      p.control.has-icons-left.has-icons-right
        input.input(type="email", placeholder="Email" required)
        span.icon.is-small.is-left
          i.fas.fa-envelope
        span.icon.is-small.is-right
          i.fas.fa-check
    .field
      p.control.has-icons-left.has-icons-right
        input.input(:type="type", placeholder="Contraseña" required)
        span.icon.is-small.is-left
          i.fas.fa-lock
        span.icon.is-small.is-right(@click="showPass")
          i.fas.fa-eye-slash(v-if="hidePass")
          i.fas.fa-eye(v-else)
    input(type="submit" class="button is-link login__button" value="Login") 

    .text-register
      p.card-ptext No tienes cuenta?  
        router-link(to="/") registrate aquí.

</template>

<script>



export default {
  name: 'BLoginCard',
  data(){
    return{
      email : '',
      hidePass: true,
      type: "password"
    }
  },

  methods : {
    showPass(){
      this.hidePass = !this.hidePass

      if(this.type === "password"){ this.type = "text" }
      else{ this.type = "password" }
    
    }
  }
}
</script>


<style lang="sass" scoped>

  @import '../assets/sass/variables'
  @import '../assets/sass/components/BLoginCard/skeleton'
  @import '../assets/sass/components/BLoginCard/skin'

</style>