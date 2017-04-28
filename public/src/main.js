import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function () {
  if(xhttp.readyState == XMLHttpRequest.DONE && xhttp.status == 200){
    console.log(xhttp.responseText)
  }
}
xhttp.open('GET', '/api', true)
xhttp.send()