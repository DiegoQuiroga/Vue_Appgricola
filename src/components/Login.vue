<template>
    <div id="login">
        <h3>Inicio de sesión</h3>
        <div>{{variable}}</div>
        <input type="text" class="form-control" v-model="correo" placeholder="correo"><br>
        <input type="password" class="form-control" v-model="clave" placeholder="Contraseña"><br><br>
        <button type="button" class="btn btn-primary" v-on:click="login()">Iniciar sesión</button>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'LoginScreen',
        data(){
            return{
                variable: localStorage.estadoSesion,
                correo: "",
                clave: "",
                token: "",
                data: "",
                headers: "",
            };
        },
        methods:{
            login(){
               this.variable = "Iniciando sesión"
               this.headers = {
                    'Content-Type' : 'application/json',
                    'Authorization' : 'JWT fefege...'
                }
                this.data = {
                    'correo' : this.correo,
                    'clave' : this.clave
                }
                axios.post('http://localhost:3000/login', this.data,{
                    headers : this.headers
                })
                .then(res =>{
                    if(res.data.codigo == 0){
                        localStorage.estadoSesion = "";
                        localStorage.correousuario = this.correo;
                        localStorage.tokenSession = res.data.token;
                        
                        
                        
                    }else{
                        localStorage.estadoSesion="El usuario o contraseña no son correctos"
                        this.variable=localStorage.estadoSesion
                    }
                     this.$router.push('/Dashboard')
                })
               
            }
        }
    }
</script>

<style>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 20px;
        padding: 20px;
    }
</style> 