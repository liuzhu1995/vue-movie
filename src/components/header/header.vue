<template>
    <header class="v-header">
      <h1 class="text">
        <i class="fa fa-ils" aria-hidden="true"></i>电影指南
      </h1>
    </header>
</template>

<script>
    export default {
        name: 'v-header',
        data () {
            return {}
        }
    }
</script>
<style >
header{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  line-height: 64px;
  text-align: center;
  color: #fff;
  background:#2dbb55;
  z-index: 999;
}
  .icon{
    padding-left: 10px;
  }
  .icon i{
    color: #1b926c;
  }
.text{
  flex: 1;
  margin: 0;
  text-align: center;
  font-size: 24px;
}
  .search{
    padding-right: 10px;
  }
  .search i{
    color: #fff;
    font-size: 20px;
  }
</style>
