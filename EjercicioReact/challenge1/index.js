/*
Challenge 1
Crea un 'custom component' llamado Page
Deberá regresar una lista desordenada (<ul>) con 4 razones por las que crees que es importante aprender React.
Añade en algún lugar el logo de React (incluído en la carpeta)

'Renderea' el componente en la página.

*/

function Page() {
    return(
        <div>
            <h1>Razones por las que es importante React</h1>
            <ul>
                <li>Se entiende fácil.</li>
                <li>Se pueden encontrar muchos tutoriales en internet.</li>
                <li>Hay muchos blogs en internet de React.</li>
                <li>No es difícil de aprender.</li>
            </ul>
            <img src="react.svg" className="reactIcon"></img>
        </div>
        
    )
}

ReactDOM.render(
    <div>
        <div>
            <Page />
        </div>
    </div>,
    document.getElementById("root")
)