<template>
    <div class="abroadRanking">
      <ul>
        <li v-for="(item,index) in nowShowMovie" @click="getId(index)">
          <div>
            <router-link class="image"  to="/introduce">
              <img :src="item.subject.images.small" :alt="item.title">
            </router-link>
          </div>
          <div>
            <router-link class="title" to="/introduce">
              {{item.title}}
              <span>{{item.year}}</span>
            </router-link>
            <div class="content">
              <div>导演：<span v-for="directors in item.subject.directors">{{directors.name}}</span></div>
              <div>主演：<span v-for="casts in item.subject.casts">{{casts.name}}</span></div>
              <div>类型：<span v-for="genres in item.subject.genres">{{genres}}</span></div>
            </div>
            <div class="star">
              <span class="grade">评分：<em>{{item.subject.rating.average}}</em></span>
              <span class="ratings_count"></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: 'abroadRanking',
        data () {
            return {
              nowShowMovie:Array,
              eleId:''
            }
        },
      methods:{
        getId(index){
          this.eleId = this.nowShowMovie[index].subject.id;
          this.$router.push({path: '/introduce',query:{id:this.eleId}})

        }
      },
      created(){
        this.$http.jsonp('https://api.douban.com//v2/movie/us_box?start=1&count=300', {},
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
