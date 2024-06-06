export default function Header(){
    return(
        <>
        <header>
            <h1><img id="cab-logo" src="cab-logo.png" alt="" /></h1>
            <ul>
                <li><a className="link" href="#">Partidas</a></li>
                <li><a className="link" href="#">Elenco</a></li>
                <li><a className="link" href="#">Entre em contato</a></li>
                <li><a className="link" href="#">Sócios</a></li>
            </ul>
        </header>
        <div id="header-border">
        </div>
        </>
    )
}