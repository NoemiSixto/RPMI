const menu = document.querySelector(".menu");
const menuDesplegable = document.querySelector(".menu-desplegable")

menu.addEventListener("click",()=>{
    menu.classList.toggle("active")
    menuDesplegable.classList.toggle("click");
})


const prevNoticias = document.querySelector(".prevnoticias");
const nextNoticias = document.querySelector(".nextnoticias");
const noticiasSlider = document.querySelector(".noticias-slider");

prevNoticias.addEventListener("click", () => {
    noticiasSlider.scrollLeft -= 1440
})

nextNoticias.addEventListener("click", () => {
    noticiasSlider.scrollLeft += 1440
})


const prevPrograma = document.querySelector(".prevprograma");
const nextPrograma = document.querySelector(".nextprograma");
const programaSlider = document.querySelector(".programa-slider");

prevPrograma.addEventListener("click", () => {
    programaSlider.scrollLeft -= 1440
})

nextPrograma.addEventListener("click", () => {
    programaSlider.scrollLeft += 1440
})


const prevGaleria = document.querySelector(".prevgaleria");
const nextGaleria = document.querySelector(".nextgaleria");
const galeriaSlider = document.querySelector(".galeria-slider");

prevGaleria.addEventListener("click", () => {
    galeriaSlider.scrollLeft -= 1440
})

nextGaleria.addEventListener("click", () => {
    galeriaSlider.scrollLeft += 1440
})
