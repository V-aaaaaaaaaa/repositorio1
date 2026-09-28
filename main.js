let ubicacionPrincipal = window.pageYOffset; // 0

window.addEventListener("scroll", function () {
    let desplazamientoActual = window.pageYOffset; //me dice cuanto me he desplazado en la pagina
    if (ubicacionPrincipal >=desplazamientoActual) { // 0>100?
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal = desplazamientoActual; 
})

