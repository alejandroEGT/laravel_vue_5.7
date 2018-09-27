
<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">Login</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="form.email" auto-complete="off" placeholder="Email"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="form.password" auto-complete="off" placeholder="Password"></el-input>
    </el-form-item>
    <!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> -->
    <el-form-item style="width:100%;">
      <button class="btn btn-dark btn-block" @click.prevent="login">Entrar</button>
      <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
    </el-form-item>
  </el-form>
</template>


<script>
  export default {
    data(){
      return{
        form:{},
      }
    },
    methods: {
      login(){
        var app = this
        
        if (app.form.email == null || app.form.password == null) {
            this.$notify.error({
                    title: 'Error',
                    message: 'Faltan datos'
                  });
        }else{
            this.$auth.login({
              data: app.form,
              redirect:'/index',
              success(){
                //this.$router.push({ path: '/index' });
              },
              error(res){
                 
                 this.$notify.error({
                    title: 'Error',
                    message: 'Error en la acción o usuario inexistente'
                  });
              },
              rememberMe: true,
              //redirect: '/index',
              //fetchUser: true,
            });
          }
        }
    }
  }
</script>
