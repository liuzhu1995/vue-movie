<template>
  <div id="app">
    <v-header></v-header>
    <v-tab></v-tab>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/header/header'
  import Tab from './components/tab/tab'
export default {
  name: 'App',
  components:{
      'v-header':Header,
      'v-tab':Tab
  }
}
</script>

<style>
  body{
    font-size: 12px;
    color: #333;
  }
  a{
    text-decoration: none;
  }
  ul{
    padding: 0;
  }
  li{
    display:flex;
    padding:0 10px;
    margin-bottom: 15px;
    list-style-type:none;
  }
  .image{
    display: inline-block;
    padding-right:15px;
    width: 90px;
  }
  .image img{
    height: 100%;
    width: 100%;
  }
  .title{
    display: block;
    font-size: 18px;
    font-weight:500;
    color: #000;
    margin-bottom: 10px;
  }
  .title span{
    font-size: 12px;
  }
  .content div{
    color: #27a;
  }
  .content span{
    margin:5px;
    line-height: 20px;
  }
  .content div a{
    padding:0 5px;
    color: #666;
  }
  .grade{
    margin-right: 15px;
  }
  .grade em,.ratings_count em{
    color: #f80;
    font-style: normal;
  }
  .grade em{
    font-weight:600;
  }
  .ratings_count{
    color: #666;
  }
  .star{
    padding-top:8px;
  }
  .m-content .top-nav {
    display: -webkit-box;
    display: flex;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    background-color: #fff; }
  .nav-title {
    flex: 1;
    text-align: center; }
  .nav-title .nav-txt {
    position: relative;
    display: inline-block;
    padding: 0 5px;
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
  }

  .nav-title .active:after{
    content: '';
    height: 1px;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    border-bottom: 2px solid #42b983;
  }
  .nav-title .active a{
    color: #42b983;
  }
  .nav-title a{
    text-decoration: none;
    color: #333;
  }

</style>
