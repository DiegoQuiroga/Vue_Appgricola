<template>
  <div class="signup">
    <h1>Registro</h1>
    <div id="nave">
     <Signup />
     <Br>
      <div>¿Ya estas registrado? 
      <router-link to="/about" class="primary">Inicia sesión</router-link></div>
    </Br>
    </div>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import Signup from '@/components/Signup.vue'

export default {
  name: 'Registrarse',
  components: {
    Signup
  }
}
</script>

<style>
    #nave {
      padding: 30px;
    }

    #nave a {
      font-weight: bold;
      color: #2c3e50;
    }

    #nave a.router-link-exact-active {
      color: #42b983;
    }
</style>