<template>
    <div class="config">

   <!--  <input type="text" placeholder="Buscar" v-model="busqueda">
     <button type="submit" v-on:click="buscar()">Submit</button><br><br>-->
         <tbody class="center">
             <tr v-for="usr in usuarios" :key="usr" class="center">
                <td>{{usr.correo}}</td>
                <td>{{usr.cc}}</td>
                <td><button class="btn btn-primary" type="button" v-on:click="eliminar()">Modificar</button></td>
                 <td><button class="btn btn-danger" type="button" >Eliminar</button></td>
            </tr>
         </tbody>
       </div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'Config',
		data(){
			return{
				usuarios: [],
                usuario: [],
				correo: null,
				clave: null,
                busqueda:""
			};
		},
		/*created: function(){
			this.headers = {
                'acces-token' : localStorage.tokenSession,
                'Authorization' : 'JWT fefege...'
            }
		},*/
		methods:{
            eliminar(){
                var data = {
                    'correo' : this.correo,
                    'clave' : this.clave,
                    'cc' : this.cc,
                    //'busqueda' :this.busqueda
                 }
                 axios.post('http://localhost:3000/setusuarios/modificar', data,{
                 }).then(res=>{
                    // this.usuarios=res.data
                    console.log(res)
                 })
            },
            buscar(){
                var data = {
                    'correo' : this.correo,
                    'busqueda' :this.busqueda
                 }
                 axios.get('http://localhost:3000/getusuario', data,{
                 }).then(res=>{
                     this.usuario=res.data
                 })
            }
		},
        mounted(){
            var data = {
                'correo' : this.correo,
                'clave' : this.clave,
                'cc' : this.cc,

            }
            axios.get('http://localhost:3000/getusuarios',data)
            .then(res=>{
                this.usuarios=res.data
            })
        }
	}
</script>

