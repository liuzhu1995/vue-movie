<template>
    <div class="top250">
      <ul>
        <li v-for="(item,index) in nowShowMovie" @click="getId(index)">
          <div>
            <router-link class="image" to="/introduce">
              <img :src="item.images.large" :alt="item.title">
            </router-link>
          </div>
          <div>
            <router-link class="title" to="/introduce">
              {{item.title}}
              <span>{{item.year}}</span>
            </router-link>
            <div class="content">
              <div>导演：<span v-for="directors in item.directors">{{directors.name}}</span></div>
              <div>主演：<span v-for="casts in item.casts">{{casts.name}}</span></div>
              <div>类型：<span v-for="genres in item.genres">{{genres}}</span></div>
            </div>
            <div class="star">
              <span class="grade">评分：<em>{{item.rating.average}}</em></span>
              <span class="ratings_count"></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: 'top250',
        data () {
            return {
              nowShowMovie:Array,
              eleId:''
            }
        },
      methods:{
        getId(index){
          this.eleId = this.nowShowMovie[index].id;
          this.$router.push({path: '/introduce',query:{id:this.eleId}})
        }
      },
      created(){
        this.$http.jsonp('https://api.douban.com//v2/movie/top250?start=1&count=300', {},
          {
            headers: {},
            emulateJSON: true
          }).then((response) => {
          const res = response.body;
          if(res){
            this.nowShowMovie = res.subjects;
          }
        });
      }
    }
</script>
<style scoped>

</style>
