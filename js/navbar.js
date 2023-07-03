let navbarHTML = `
<div class="navbar">
                <div class="logo">
                    <a href="index.html"><img src="img/logo.png" alt="logo de la pagina" /></a>
                </div>

                <ul class="links">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="index.html#titulo">Viajes</a></li>
                    <li><a href="quienessomos.html">Quiénes Somos</a></li>
                    <li><a href="contactanos.html">Contáctenos</a></li>
                </ul>

                <!-- Comienza menu responsive-->
                <div class="toggle_btn" alt="icono para abrir menu">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>

            <!-- menu para desplegar -->
            <ul class="dropdown_menu open">
                <li><a href="index.html">Inicio</a></li>
                <li><a href="index.html#titulo">Viajes</a></li>
                <li><a href="quienessomos.html">Quiénes Somos</a></li>
                <li><a href="contactanos.html">Contáctenos</a></li>
            </ul>
`
document.querySelector("header").innerHTML=navbarHTML;


//Este codigo le da funcionalidad menu desplegable de la barra de navegacion para pantallas pequeñas:
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
}