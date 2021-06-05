<template>
    <div class="config">
        <div id="nave">
         <router-link to="/home"><button class="btn btn-secondary">Volver</button></router-link>
        </div>
        <h1>Configuración</h1>
           <Config />
    </div>
</template>

<script>
import Config from '@/components/Config.vue'
export default {
    name: 'Configuracion',
  components: {
    Config
  }
}
</script>