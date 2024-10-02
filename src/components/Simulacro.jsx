import 'bootstrap/dist/css/bootstrap.min.css';
import './Simulacro.css'

const Simulacro = (props) => {
    return <>
     <button className="container simulacro row">
        <div className='col-md-3'>Imagen</div>
        <div className='col-md-9'>
        <p>{props.nombre}</p>
        <p>{props.universidad}</p>
        <p>{props.rubro}</p>
        </div>
    </button>
    
    </>
}

export default Simulacro;