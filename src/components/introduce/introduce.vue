<template>
  <transition name="fade">
    <div class="introduce">
          <header class="v-header">
            <div class="return" @click="pageup">
              <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
            <h1 class="text">电影信息</h1>
          </header>
          <div class="item">
            <div class="title">
              <h2> {{info.title}}{{info.original_title}}<span>({{info.year}})</span></h2>
            </div>
              <div class="image">
                <img :src="info.images.small" alt="nowShowMovie.title">
              </div>
            <div>
              <div class="content">
                <div>导演：<span v-for="director in info.directors">{{director.name}}</span></div>
                <div>主演：<span v-for="cast in info.casts">{{cast.name}}<img :src="cast.avatars.samll" alt=""></span></div>
                <div>类型：<span v-for="type in info.genres">{{type}}</span></div>
                <div>制片国家/地区：<span v-for="countrie in info.countries">{{countrie}}</span></div>
                <div>又名：<span v-for="aka in info.aka">{{aka}}/</span></div>
              </div>
            </div>
          </div>
        </div>
  </transition>

</template>

<script>
  export default {
        name: 'introduce',
        data () {
            return {
              info:{
                images:Object
              }
            }
        },
      methods:{
        pageup(){
            this.$router.go(-1)
        }
      },
      created(){
        let id = this.$route.query.id;
        this.$http.jsonp('https://api.douban.com//v2/movie/subject/'+id, {},
          {
            headers: {},
            emulateJSON: true
          }).then((response) => {
          const res = response.body;
          if(res){
            this.info = res;
          }
        });
      }
  }
</script>
<style scoped>
  .introduce{
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background:#ffffff;
  }
  .return{
    float: left;
    padding-left: 10px;
  }
  .return i{
    font-size: 20px;
  }
  .item{
    padding:15px;
  }
  h2{
    font-size: 20px;
    margin: 0;
  }
  .title{
    margin-bottom: 10px;
    color: #494949;
  }
  .title span{
    padding:0 5px;
    font-size: 14px;
    color: #888;
  }
  .image{
    width: 100%;

  }
  .image img{
    width: 100%;
    max-height:350px;
  }
  .content{
    color: #666;
  }
  .content>div{
    margin-top: 10px;
  }
  .content span{
    color: #333;
  }
  .related-info h2{
    color:#007722;
  }
  .related-info p{
    line-height:20px;
    font-size: 13px;
  }
  .info{
    padding-top: 10px;
    text-align: center;
  }
  .info span{
    font-size: 14px;
    font-weight: 600;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
