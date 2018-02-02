<template>
        <div class="content">
          <ul>
            <li v-for="(item,index) in nowShowMovie" @click="getId(index)" v-if="index<=10">
              <div>
                <div class="image">
                  <img :src="item.images.large" :alt="item.title">
                </div>
              </div>
              <div>
                <div class="title">
                  {{item.title}}
                  <span>{{item.year}}</span>
                </div>
                <div class="content">
                  <div>导演：<span v-for="directors in item.directors">{{directors.name}}</span></div>
                  <div>主演：<span v-for="casts in item.casts">{{casts.name}}</span></div>
                  <div>类型：<span v-for="genres in item.genres">{{genres}}</span></div>
                </div>
                <div class="star">
                  <span class="grade">评分：<em>{{item.rating.average}}</em></span>
                  <span class="ratings_count">
                观看人数：<em>{{item.collect_count}}</em>
              </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
</template>

<script>
  export default {
    name: 'nowPlaying',
    data () {
      return {
        nowShowMovie: Array,
        eleId: ''//对应条目的id
      }
    },
    created(){
      this.loadData()
    },
    methods: {
      getId(index){
        this.eleId = this.nowShowMovie[index].id;
        this.$router.push({path: '/introduce', query: {id: this.eleId}})
      },
      loadData(){
        this.$http.jsonp('https://api.douban.com//v2/movie/in_theaters?start=1&count=300', {},
          {
            headers: {},
            emulateJSON: true
          }).then((response) => {
          const res = response.body;
          if (res) {
            this.nowShowMovie = res.subjects;
          }
        });
      }
    }

  }
</script>
<style scoped>

  .content ul{
    margin: 0;
  }
</style>
