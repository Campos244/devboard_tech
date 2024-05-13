document.addEventListener("DOMContentLoaded", function () {
    let iconeNoite = document.getElementById("icone-noite");
    let iconeDia = document.getElementById("icone-dia");
    let paginaCompleta = document.querySelector("body");
    let linksHeader = document.querySelectorAll(".container_header_links");
    let linksHeaderAncoras = document.querySelectorAll(".container_header_nav");
    let menuHamburguer = document.getElementById("menu-hamburguer");

    iconeNoite.addEventListener("click", function () {
        paginaCompleta.classList.add("modo-dark");

        linksHeader.forEach(link => {
            link.classList.add("modo-dark");
        })
    })

    iconeDia.addEventListener("click", function () {
        paginaCompleta.classList.remove("modo-dark");

        linksHeader.forEach(link => {
            link.classList.remove("modo-dark");
        })
    })

    menuHamburguer.addEventListener("click", function(){
        linksHeaderAncoras.forEach(link => {
            link.classList.toggle("ativo");
        })
        document.querySelector(".container_header").classList.toggle("menu-ativo");
    })
    

})