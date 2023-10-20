import axios from "axios"
export default {
   // 时间格式 2023-07-01
   getTime: () => {
      var date = new Date()
      var y = date.getFullYear()
      var m = date.getMonth() + 1
      m = m < 10 ? ('0' + m) : m
      var d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      return y + "-" + m + "-" + d
   },
   file:()=>{
      return "111"
   }
}
