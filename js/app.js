
//only phones
var x = window.matchMedia("(max-width: 479px)");
esCell(x); // Call listener function at run time
x.addListener(esCell); // Attach listener function on state changes

// nav

function esCell(x) {
  if (x.matches) {
    // If media query matches
    const menuIco = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector("#mainNav");
    const anchor = document.querySelector(".anchor");
    const abierto = false;

    let abrirMenuFull = () => {
      this.abierto = !this.abierto;
      mainNav.classList.remove("menuFullAbierto");
      mainNav.classList.remove("desanimaMenu");
      menuIco.classList.toggle("is-active");

      this.abierto
        ? mainNav.classList.toggle("menuFullAbierto")
        : mainNav.classList.toggle("desanimaMenu");
    };

    menuIco.addEventListener("click", abrirMenuFull);
    //anchor.addEventListener("click", abrirMenuFull);
  } else {
    return;
  }
}

//submenu

const productos = document.querySelector("#anchorpro")
const submenu = document.querySelector(".submenu")
const flecha = document.querySelector("#anchorpro span")
const cerrar = document.querySelector(".cerrarCel")

let escondido = true
productos.addEventListener("click", function(e){
e.preventDefault()
submenu.classList.remove("submenuAbierto")
submenu.classList.remove("submenuCerrado")
escondido ? submenu.classList.toggle("submenuAbierto") : submenu.classList.toggle("submenuCerrado")
if(escondido){
  flecha.innerHTML="&#9660;"
  submenu.classList.add("mostrar")
}else{
  flecha.innerHTML="&#9654;"
}
escondido = !escondido

//animacion de css
})

cerrar.addEventListener("click", ()=>{
submenu.classList.add("submenuCerrado")
submenu.classList.remove("submenuAbierto")
flecha.innerHTML="&#9654;"
escondido=true
})


const cambio = () => {
  console.log(`Actual ${this.currentSlide}`)
}



// bigen dudas

//scroll suave en dudas
const links = document.querySelectorAll(".tinte a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop-220;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

// esconder respuesta

const pregunta = document.querySelectorAll(".pregunta")
pregunta.forEach(item=>{

  item.addEventListener("click", function(e){
    cerrarPregunta()
    e.preventDefault()
    const p = e.target.parentElement.nextElementSibling
    // const alturaP = p.clientHeight
    // console.log(alturaP)
    // p.style.height=alturaP
    p.classList.toggle('muestrame')
    e.target.classList.add('h4Arriba')

  })

})

const cerrarPregunta = ()=>{
  pregunta.forEach(pregunta =>{
  // pregunta.querySelector("p").classList.remove('muestrame')
   pregunta.querySelector('h4').classList.remove('h4Arriba')
  })
}



// carru
const izq = document.querySelector("#izq")
const der = document.querySelector("#der")


if (document.URL.indexOf("index") >= 0) {
  const carrusel = new Siema({
    selector: ".slideHome",
    easing: "ease-out",
    //perPage: 2,
    loop: true,
    draggable: true,
    perPage:{
      768:2,
      1024:3
    },
    onInit: cambio,
    onChange: cambio,
  });

  izq.addEventListener("click", (e) => {
    e.preventDefault()
    carrusel.prev()
  })
  der.addEventListener("click", (e) => {
    e.preventDefault()
    carrusel.next()
  })
  
}


//bigen polvo
if (document.URL.indexOf("bigen-polvo" && "") >= 0) {
  const carrusel = new Siema({
    selector: "#slidePro",
    easing: "ease-out",
    //perPage: 2,
    loop: false,
    draggable: true,
    perPage:{
      0:2,
      768:3,
      1024:5
    }
  });

  izq.addEventListener("click", (e) => {
    e.preventDefault()
    carrusel.prev()
  })
  der.addEventListener("click", (e) => {
    e.preventDefault()
    carrusel.next()
  })
  

}
