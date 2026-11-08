export default function Header(props){
    return (
    <div id="cabecera">
        <img className="logo" src={process.env.PUBLIC_URL + "/vite.svg"} alt="el logo de la pagina"/>
        <h3 className="mensaje">Bienvenido a la pagina de Alvaro Garcia Lopez</h3>
    </div>)
}