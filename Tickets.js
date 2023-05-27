const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const correo = document.getElementById("correo")
const quantitybtn = document.getElementById("quantity")
const categorytn = document.getElementById("category")
const pricebtn = document.getElementById("price")
const deletebtn = document.getElementById("delete_button")
deletebtn.addEventListener("click", function () {
    pricebtn.innerHTML="$"
    quantitybtn.value=""
    nombre.value=""
    apellido.value=""
    correo.value=""
 })
const totalbtn = document.getElementById("total_button")
totalbtn.addEventListener("click", function () {
    console.log(typeof quantitybtn.value)
    console.log(Number(categorytn.value))
    const quantityvalue=quantitybtn.value
    const Noletras = /^[0-9]+$/;
    if(!Noletras.test(quantityvalue)){
        pricebtn.innerHTML="Ingrese un numero valido"
        return
        
    }
    const baseprice=200
    const porcentaje=Number(categorytn.value)
    const finalprice=(baseprice*quantityvalue)-(baseprice*quantityvalue)*(porcentaje/100)
    pricebtn.innerHTML=finalprice + "$"
})
