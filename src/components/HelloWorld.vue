<template>
  <div class="hello" >
    <div class="forvideo">
      <video src="../assets/background.mp4" loop="loop" autoplay="autoplay"></video>
    </div>

    <el-card class="box-card" >
    <el-form ref="form" :model="form" label-width="80px" :label-position="labelPosition" >
      <el-form-item label="账户" >
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
      <el-input  v-model="form.password" show-password label="密码"></el-input>
      </el-form-item>

    </el-form>
    <el-form>
      <el-form-item >
        <el-button type="primary" @click="onSubmit">登陆</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          password:'',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        tableDate:[{

        }],
        labelPosition: 'left',
      }
    },
    methods: {
      onSubmit() {
        this.$router.push({path:'/index'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.forvideo{
  margin:0px;
  height: 100%;
  width: 100%;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 10px;
}
.el-input{
}
.box-card {
  width: 600px;
  left: 50%;
  top: 50%;
  position: absolute;
  margin-left: -300px;
  margin-top: -113px;

}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
video{
  position: fixed;
  right: 0;
  bottom: 0;
  width:auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  object-fit: contain;
  z-index: -100;
  -webkit-filter: grayscale(20%);
}
</style>
