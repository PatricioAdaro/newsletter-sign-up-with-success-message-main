let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const email = document.querySelector("#email");
const formulario = document.querySelector("#formulario");
const enviar = document.querySelector("#enviar");
const massageStar = document.querySelector("#massage-star");
const error = document.querySelector("#mje-error");

formulario.addEventListener("submit", function(evt){
    evt.preventDefault();
    enviar.addEventListener("click", submit())
}) 

email.addEventListener("click",function(){
    error.textContent=" ";
})

function submit(){
    if ( !validEmail.test(email.value)){
        email.style.borderColor ="red";
        email.style.backgroundColor = "hsla(0, 100%, 52%, 0.11)";
        error.textContent= "valid email required";
    }else{
        const massageCont = document.querySelector("#massage-cont");
        massageCont.style.display="block";
        const valorEmail = document.querySelector("#valor-email");
        valorEmail.textContent = email.value
    }
}
 const closeButton = document.getElementById("close-button");
 closeButton.addEventListener("click", function(){
    location.href = location.href ; 
 })

function cambiarImagen() {
    const imagenContainer = document.getElementById('imagen');
   
    if (window.innerWidth <= 425) {
        imagenContainer.src = './assets/images/illustration-sign-up-mobile.svg';
    } else {
        imagenContainer.src = './assets/images/illustration-sign-up-desktop.svg';
    }
  }
addEventListener("DOMContentLoaded", cambiarImagen);
addEventListener("resize", cambiarImagen);