<template>
    <div class="tablero">
        <h1>Bienvenido {{correo}}</h1>
        <h2 v-if="rol!=0"> Tipo usuario: {{tipousuario}}</h2>
        <h2 v-if="rol==0"> ADMINISTRADOR</h2>
        <h3 v-if="rol!=0">Su producto registrado es: {{tipopp}}</h3>
        <button v-if="rol==0" class="btn btn-primary" v-on:click="botonadmin()">{{titulobotonadmin}}</button>
        <a href="/Dane"><img v-if="id_PP == '0'"  src="@/assets/mango.jpg" height="200"></a>
        <a href="/Dane"><img v-if="id_PP == '1'"  src="@/assets/mandarina.jpg" height="200"></a>
        <a href="/Dane"><img v-if="id_PP == '2'"  src="@/assets/Fresa.jpg" height="200"></a>
        <a href="/Dane"><img v-if="id_PP == '3'"  src="@/assets/Tomate.jpg" height="200"></a>
        <a href="/Dane"><img v-if="id_PP == '4'"  src="@/assets/limon.jpg" height="200"></a>
<br>
<br>
<table v-if="vertablaadmin==1" class="table table-dark">
        <thead  class="thead-dark" style="color:black">
			<th scope="col">Correo</th>
			<th scope="col">Cedula</th>
			<th scope="col">id_PP</th>
			<th scope="col">Eliminar</th>
		</thead>

         <tbody  class="center" >
             <tr v-for="usr in usuarios" :key="usr" class="center">
                <td>{{usr.correo}}</td>
                <td>{{usr.cc}}</td>
                <td>{{usr.id_PP}}</td>
                 <td><button v-if="usr.rol!=0" class="btn btn-danger" type="button" v-on:click="botoneliminar(usr.correo)">Eliminar</button></td>
            </tr>
         </tbody>
</table>
<div id="nave">
         <router-link to="/"><button class="btn btn-danger">SALIR</button></router-link>
        </div>

</div>

</template>

<script>
import axios from 'axios'
export default {
    name: 'Dashboard',
    data() {
        return{
            correo: localStorage.correousuario,
            rol: "",
            id_PP:"",
            error : false,
            error_msg: "",
            usuario:[],
            tipousuario:"",
            tipopp:"",
            vertablaadmin:0,
            usuarios:[],
            titulobotonadmin:"Administrar Usuarios"       
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
            axios.post('https://back-app-agricola.herokuapp.com/signup',data)
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
        },
        botonadmin(){
            if(this.vertablaadmin==0){
                var data = {
                'correo' : this.correo,
                'clave' : this.clave,
                'cc' : this.cc,
                }
                axios.get('https://back-app-agricola.herokuapp.com/getusuarios',data)
                .then(res=>{
                this.usuarios=res.data
                })
                this.titulobotonadmin="Ocultar tabla"
                this.vertablaadmin=1
            }else{
                this.titulobotonadmin="Administrar Usuarios"
                this.vertablaadmin=0
            }
        },

        botoneliminar(correoeliminar){
          
            var data = {
                'correo' : correoeliminar,
                }
                axios.post('https://back-app-agricola.herokuapp.com/setusuarios/eliminar',data)
                .then(res=>{
                //this.usuarios=res.data
                alert(res.data.mensaje)
                window.location.reload()
                })
        }
    },
    mounted(){
        var data = {
                'correo' : this.correo
               /* 'clave' : this.clave,
                'cc' : this.cc,
                'id_PP' : this.id_PP,
                'rol' : this.rol*/

            }
        axios.post('https://back-app-agricola.herokuapp.com/getusuario',data)
        .then(res=>{
            this.usuario=res.data
            this.rol = res.data.rol 
            this.id_PP = res.data.id_PP
             data = {
                'codigo' : this.rol
            }
            axios.post('https://back-app-agricola.herokuapp.com/getrol',data)
        .then(res=>{
            this.tipousuario=res.data.tipo

              data = {
                'id_PP' : this.id_PP
            }|
            axios.post('https://back-app-agricola.herokuapp.com/getproducto',data)
        .then(res=>{
            this.tipopp=res.data.Nombre
        })
        })
        })
     


    }
}
</script>




