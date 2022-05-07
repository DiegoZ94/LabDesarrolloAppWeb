/*
Challenge 2

Reconstruye la siguiente página creando 3 'custom components' para cada elemento y llámalos: 

Header
MainContent
Footer

Crea un cuarto 'custom component' llamado Page, dentro de él incluye los 3 componentes anteriores.

'Renderea' Page en la página.
*/

function Header(){
    return(
        <div className="encabezado">
            <header>
                <nav>
                    <img src="./react.svg" width="40px" className="reactLogo"/>
                    <ul className="mainmenu">
                        <li>Basics</li>
                        <li>Demo</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

function MainContent(){
    return(
        <div>
            <h1>Razones para aprender React</h1>
                <ul>
                    <li>Nuevas tecnologías</li>
                    <li>Desarrollo con componentes</li>
                    <li>Mejorar mi experiencia como desarrollador</li>
                    <li>Mejorar en JS y/o TS</li>
                </ul>
        </div>
    )
}

function Footer(){
    return(
        <div>
            <footer>
                <small>© 2022 TC3052. LDAW @ Tec CCM.</small>
            </footer>
        </div>
    )
}


ReactDOM.render(<div>
                    <Header />
                    <MainContent />
                    <Footer />
                </div>,
                document.getElementById("root"))

