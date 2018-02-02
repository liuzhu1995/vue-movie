<template>
    <div class="tab">
      <div v-for="(item,index) in pageMenuList" @click="addClass(index)" >
        <router-link class="tab-item"  :class="{active:ind===index}"  :to="{path:item.listLink}" >
          <span>{{item.name}}</span>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'tab',
        data () {
            return {
                ind:0,
              pageMenuList:[
                {name:'正在上映',listLink:'/'},
                {name:'即将上映',listLink:'/willPlaying'},
                {name:'北美票房榜',listLink:'/abroadRanking'},
                {name:'Top250',listLink:'/top250'},
              ],
            }
        },
      methods:{
            addClass(index){
                this.ind = index
            }
      }
    }
</script>
<style scoped>
  .tab{
    display: flex;
    height: 40px;
    line-height: 40px;
    padding:0 15px;
    margin-bottom: 10px;
  }
  .tab div{
    flex: 1;
    text-align: center;
  }
  .tab div a{
    display: inline-block;
  }
  .tab-item{
    padding:0 5px;
    font-size: 14px;
    text-align: center;
    text-decoration: none;
    color: #333;
  }
  .active{
    color: #42b983;
    border-bottom: 2px solid #42b983;
  }
</style>
