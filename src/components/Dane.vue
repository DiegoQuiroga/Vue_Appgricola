<template>
    <div class="Dane">
        <body class="dashboard">
    <div class="container-fluid display-table">
        <div class="row display-table-row">
            <div class="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
                <div class="logo">
                    <a href="/Dashboard"><img src="@/assets/tierra.png" height="100"></a><br>
                    
                    <br>
                </div>
            </div>
            <div class="col-md-10 col-sm-11 display-table-cell v-align">
                <!--<button type="button" class="slide-toggle">Slide Toggle</button> -->
                <div class="user-dashboard">
                    <h1 align="center" >Sistema Agricola</h1>
                    <div class="row">
                        <div class="col-md-5 col-sm-5 col-xs-12 gutter">

                            <div class="sales">
                                <h2>Your Sale</h2>

                                <div class="btn-group">
                                    <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span>Period:</span> Month
                                    </button>
                                    <div class="dropdown-menu">
                                        <a href="#">2012</a>
                                        <a href="#">2014</a>
                                        <a href="#">2015</a>
                                        <a href="#">2016</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-7 col-sm-7 col-xs-12 gutter">

                            <div class="sales report">
                                <h2>Report</h2>
                                <div class="btn-group">
                                    <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span>Period:</span> Day
                                    </button>
                                    <div class="dropdown-menu">
                                        <a href="#">2012</a>
                                        <a href="#">2014</a>
                                        <a href="#">2015</a>
                                        <a href="#">2016</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br><br><br>
                        <h2>Sensores Tiempo Real</h2>

<table class="table table-black">
  <thead>
    <th>Sensor Temperatura</th>
    <th>Sensor Vel_viento</th>
    <th>Sensor Radiación</th>
  </thead>
  <tr>
    <td>20 °C</td>
    <td>15 m/s</td>
    <td>6 rad</td>
  </tr>
  <tr>
   <td>21 °C</td>
    <td>16 m/s</td>
    <td>5 rad</td>
  </tr>
  <tr>
   <td>20 °C</td>
    <td>17 m/s</td>
    <td>4 rad</td>
  </tr>
  <tr>
    <td>19 °C</td>
    <td>22 m/s</td>
    <td>4 rad</td>
  </tr>
  <tr>
    <td>18 °C</td>
    <td>22 m/s</td>
    <td>3 rad</td>
  </tr>
  <tr>
    <td>17 °C</td>
    <td>20 m/s</td>
    <td>3 rad</td>
  </tr>
</table>
                    </div>
                </div>
            </div>
        </div>

    </div>
 <!-- Modal content-->
    <!-- Modal 
    <div id="add_project" class="modal fade" role="dialog">
        <div class="modal-dialog">

           
            <div class="modal-content">
                <div class="modal-header login-header">
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <h4 class="modal-title">Add Project</h4>
                </div>
                <div class="modal-body">
                            <input type="text" placeholder="Project Title" name="name">
                            <input type="text" placeholder="Post of Post" name="mail">
                            <input type="text" placeholder="Author" name="passsword">
                            <textarea placeholder="Desicrption"></textarea>
                    </div>
                <div class="modal-footer">
                    <button type="button" class="cancel" data-dismiss="modal">Close</button>
                    <button type="button" class="add-project" data-dismiss="modal">Save</button>
                </div>
            </div>

        </div>
    </div>-->
    </body>
    </div>
</template>

<script>
//	import axios from 'axios';

export default {
    name: 'Dane',
        data() {
        return{
            info:""
        };
    },
    methods: {
      /*traer(){
          headers: {'Content-type': 'text/html; charset=UTF-8'}
        axios.get('http://localhost:3000/consumo',data)
        .then(res => {
            console.log(res)
        })*/

      /*  axios({
         url: 'http://appweb.dane.gov.co:9001/sipsaWS/SrvSipsaUpraBeanService?WSDL',
         method: 'get',
          headers: {'Content-type': 'text/html; charset=UTF-8'},
         data: text
        }).then(OkCallback, ErrorCallback)
     }*/
    },
    mounted(){
       /* var data ={
        }
       axios
      .get('http://appweb.dane.gov.co:9001/sipsaWS/SrvSipsaUpraBeanService?WSDL',data)
      .then(response => (this.info = response))*/

     /* try {
    const response =  axios.get('http://appweb.dane.gov.co:9001/sipsaWS/SrvSipsaUpraBeanService?WSDL');
    console.log(response);
  } catch (error) {
    console.error(error);
  }*/
      /*  axios.get('http://url.to/events.xml')
  .then(response => {
    var self = this; 
    parseString(response.data, function (err, result) {
      self.events = result
    });        
  })*/
}
  
    }
    

     

</script>