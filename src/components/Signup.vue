<template>
    <div class="container mt-2 shadow" id="singup">
        <form action="" method="post">
            <fieldset class="username">
                <label for="email" class="form-label">Correo Electrónico</label>
              <input type="email" class="form-control" name="email" placeholder="ejemplo@usa.edu.co" v-model="correo">
            </fieldset>
             <fieldset class="mb-4">
             <label for="password" class="form-label">Contraseña <i class="fas fa-key"></i></label>
             <input type="password" class="form-control" name="password" v-model="clave">
             </fieldset>
             <fieldset class="mb-4">
                        <label for="id" class="form-label">Nit/CC <i class="far fa-address-card"></i></label>
                        <input type="id" v-model="cc" class="form-control" name="id" >
             </fieldset>
            
            <label for="productos">Escoja un producto agricola:</label>
             <div id="productos">
                 <select  v-model.number="id_PP" type="number"  >
                     <option v-for=" i in productos" :key="i" id="id_PP" >{{i.id_PP}}.{{i.Nombre}}</option>
                 </select>
             </div>

             <label for="roles">Escoja su función:</label>
             <div id="roles">
                 <select v-model.number="rol" name="roles"  >
                     <option v-for=" i in Roles" :key="i" id="i" >{{i.codigo}}.{{i.tipo}}</option>
                 </select>
             </div>
             <br>
            <button type="button" v-on:click="singup()" class="btn btn-primary">REGISTRAR</button>
             <!--  <b-alert show variant="danger">Danger Alert</b-alert> -->
        </form>          
     </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'HOME',
    data() {
        return{
            correo: "",
            clave: "",
            cc: "",
            id_PP: "",
            rol: "",
            error : false,
            error_msg: "",
            productos:[],
            Roles:[],
        };
    },
    methods:{
        singup(){
    
            var data = {
                'correo' : this.correo,
                'clave' : this.clave,
                'cc' : this.cc,
                'id_PP' : this.id_PP,
                'rol' : this.rol
            }
            axios.post('http://localhost:3000/singup',data)
            .then(res =>{
                console.log(res)
                
                if(res.data.codigo == 0){
                    alert("Usuario registrado")
                    this.variable=res.data.mensaje
                    localStorage.estadoSesion = ""
                    this.$router.push('/Inicio')
            }
            else  alert("Usuario NO registrado")//this.variable=res.data.mensaje
            })
        }
    },
    mounted(){
        var data = {
                'correo' : this.correo,
                'clave' : this.clave,
                'cc' : this.cc,
                'id_PP' : this.id_PP,
                'rol' : this.rol

            }
        axios.get('http://localhost:3000/getproductos',data)
        .then(res=>{
            this.productos=res.data
        })
     
        axios.get('http://localhost:3000/getroles',data)
        .then(res=>{
            this.Roles=res.data
        })
    }
}
</script>