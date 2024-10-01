import 'bootstrap/dist/css/bootstrap.min.css';
import './Simulacro.css'

const Simulacro = (props) => {
    return <div className="container simulacro">
        <p>{props.nombre}</p>
        <p>{props.universidad}</p>
        <p>{props.rubro}</p>
    </div>
}

export default Simulacro;