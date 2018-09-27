<!--Master Page Home-->
<!-- <template>
  <div>
      <nav class="navbar navbar navbar-dark bg-dark fixed-top">
        <ul class="nav">
          <li class="nav-item">
            <router-link style="color:white" :to="{path:'/index'}" class="nav-link active color">
              <img class="img img-rounded" height="40" :src="rando.large">
              {{ user.nombres }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link style="color:white" :to="{name:'David'}"class="nav-link">David</router-link>
          </li>
          <li class="nav-item">
            <router-link style="color:white" :to="{name:'Bryanm'}" class="nav-link">Mexi</router-link>
          </li>
          <li class="nav-item">
            <router-link style="color:white" :to="{name:'Bryanv'}" class="nav-link">bryan</router-link>
          </li>
           <li class="nav-item">
            <router-link style="color:white" :to="{name:'Felipe'}" class="nav-link">Felipe</router-link>
          </li>
          <li class="nav-item">
            <button @click="logout" >Salir</button>
          </li>
        </ul>	
      </nav>
  



  <div class="main-content">
     <router-view :key="$route.path"></router-view>  
  </div>

</div>
</template> -->
<template>
  <div>
    <!-- <nav class="navbar navbar navbar-dark bg-dark fixed-top">
        <ul class="nav">
          <li class="nav-item">
            <a style="color:white" data-toggle=".containers" id="sidebar-toggle" class="nav-link active color">
              <img class="img img-rounded" height="40" :src="rando.large">
              {{ user.nombres }}
            </a>
          </li>
          <li class="nav-item">
          
             <router-link style="color:white" :to="{path:'/index'}" class="nav-link active color">
              Inicio
            </router-link>
          </li>
          <li class="nav-item">
            <router-link style="color:white" :to="{name:'Bryanm'}" class="nav-link">Mexi</router-link>
          </li>
          <li class="nav-item">
            <router-link style="color:white" :to="{name:'Bryanv'}" class="nav-link">bryan</router-link>
          </li>
           <li class="nav-item">
            <router-link style="color:white" :to="{name:'Felipe'}" class="nav-link">Felipe</router-link>
          </li>
          <li class="nav-item">
            <button @click="logout" >Salir</button>
          </li>
        </ul> 
      </nav> -->

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
   <a style="color:white" data-toggle=".containers" id="sidebar-toggle" class="nav-link active color">
              <img class="img img-rounded" height="40" :src="rando.large">
              {{ user.nombres }}
            </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
       <button @click="logout" >Salir</button>
      </li>
    </ul>
  </div>
</nav>
    <div class="containers">
        <div id="sidebar">
            <div style="position: fixed; width:200px; margin-top:20px; margin-left:5px">
              <template>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                  <el-tab-pane label="User" name="first">User</el-tab-pane>
                  <el-tab-pane label="Config" name="second">Config</el-tab-pane>
                  <el-tab-pane label="Role" name="third">Role</el-tab-pane>
                  <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
                </el-tabs>
              </template>
            </div>
        </div>
        <div class="main-content" style="margin:60px">
            <!-- <a data-toggle=".containers" id="sidebar-toggle">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </a> -->
            <div class="">
                <div class="main-content">
                 <router-view :key="$route.path"></router-view>  
              </div>
            </div>
        </div>
    </div>
</div>
</template>

<script type="text/javascript">
  export default{
    data(){
      return{
        user: this.$auth.user(),
        rando:{},
        activeName:'first'
      }
    },
    created(){

      this.avatar()
      $(document).ready(function() {
        $("[data-toggle]").click(function() {
          var toggle_el = $(this).data("toggle");
          $(toggle_el).toggleClass("open-sidebar");
        });
      });

      $('.btn-expand-collapse').click(function(e) {
        $('.navbar-primary').toggleClass('collapsed');
      });
    },
    methods:{
      logout: function () {
        this.$confirm('Seguro que quieres salir ?', 'Confirmation', {
         }).then(() => {
              this.$auth.logout({
                  makeRequest: true,
                  redirect: '/'
              });
         });
      },
      avatar(){
        axios.get('https://randomuser.me/api/').then((res)=>{
          this.rando = res.data.results[0].picture;
          console.log(this.rando)
        });
      }
    }
  }
</script>

<style type="text/css">
 /**/

  body, html {
    height: 100%;
    margin: 0;
    /*overflow:hidden;*/
    font-family: helvetica;
    font-weight: 100;
}
.containers {
    position: relative;
   /* height: 100%;
    width: 100%;*/
    left: 0;
    -webkit-transition:  left 0.4s ease-in-out;
    -moz-transition:  left 0.4s ease-in-out;
    -ms-transition:  left 0.4s ease-in-out;
    -o-transition:  left 0.4s ease-in-out;
    transition:  left 0.4s ease-in-out;
}
 
.containers.open-sidebar {
    left: 220px;
}
 
#sidebar {
    position: absolute;
    left: -220px;
    background: #F2F3F4;
    width: 220px;
    height: 100%;
    box-sizing: border-box;
}
#sidebar ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
#sidebar ul li {
    margin: 0;
}
#sidebar ul li a {
    padding: 15px 20px;
    font-size: 16px;
    font-weight: 100;
    color: white;
    text-decoration: none;
    display: block;
    border-bottom: 1px solid #C9223D;
    -webkit-transition:  background 0.3s ease-in-out;
    -moz-transition:  background 0.3s ease-in-out;
    -ms-transition:  background 0.3s ease-in-out;
    -o-transition:  background 0.3s ease-in-out;
    transition:  background 0.3s ease-in-out;
}
#sidebar ul li:hover a {
    background: #C9223D;
}
.main-content {
  /*  width: 100%;
    height: 100%;*/
    padding: 10px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    position: relative;
}
.main-content .content{
    box-sizing: border-box;
    -moz-box-sizing: border-box;
padding-left: 60px;
width: 100%;
}
.main-content .content h1{
    font-weight: 100;
}
.main-content .content p{
    width: 100%;
    line-height: 160%;
}
.main-content #sidebar-toggle {
    background: #DF314D;
    border-radius: 3px;
    display: block;
    position: relative;
    padding: 10px 7px;
    float: left;
}
.main-content #sidebar-toggle .bar{
     display: block;
    width: 18px;
    margin-bottom: 3px;
    height: 2px;
    background-color: #fff;
    border-radius: 1px;   
}
.main-content #sidebar-toggle .bar:last-child{
     margin-bottom: 0;   
}
</style>