<template>
  <router-view class="App_box" />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-size: 14px;
}
li{
  list-style: none;
}
body{
  overflow-x: hidden;
}
i{
  font-style: normal;
}
a {
  text-decoration:none;
}
.App_box{
  width: 100%;
  height: 100%;
}
// a:link {color: blue; text-decoration:none;} //未访问：蓝色、无下划线 
// a:active:{color: red; } //激活：红色 
// a:visited {color:purple;text-decoration:none;} //已访问：紫色、无下划线 
// a:hover {color: red; text-decoration:underline;} //鼠标移近：红色、下划线
</style>
