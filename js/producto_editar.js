console.log(location.search) // lee los argumentos pasados a este formulario
var id=location.search.substr(4)
console.log(id)
const { createApp } = Vue
createApp({
data() {
return {
id:0,
nombre:"",
precio:0,
stock:0,
precio:0,
url:'https://jfcodoacodo.pythonanywhere.com/productos/'+id,
}
},
methods: {
fetchData(url) {
fetch(url)
.then(response => response.json())
.then(data => {

console.log(data)
this.id=data.id
this.fecha = data.fecha;
this.precio=data.precio
this.destino=data.destino
this.paquetes=data.paquetes
this.pasajeros=data.pasajeros
})
.catch(err => {
console.error(err);
this.error=true
})
},
modificar() {
let producto = {
fecha:this.fecha,
destino: this.destino,
pasajeros: this.pasajeros,
paquetes: this.paquetes,
precio:this.precio
}
var options = {
body: JSON.stringify(producto),
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
alert("Registro modificado")
window.location.href = "./index.html";
})
.catch(err => {
console.error(err);
alert("Error al Modificar")
})
}
},
created() {
this.fetchData(this.url)
},
}).mount('#app')