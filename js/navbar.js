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
`
document.querySelector("header").innerHTML=navbarHTML;