import 'bootstrap/dist/css/bootstrap.min.css';
import Simulacro from '../components/Simulacro';

const Simulacros = () => {
    return <div>
        <h1>Simulacros</h1>
        <div className='row'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
                <Simulacro nombre="Simulacro 2022-1" universidad="Examen San Marcos" rubro="HABILIDAD VERBAL"/>
                <Simulacro nombre="Simulacro 2022-2" universidad="Examen San Marcos" rubro="HABILIDAD LOGICO MATEMATICA"/>
                <Simulacro nombre="Simulacro 2023-1" universidad="Examen San Marcos" rubro="MATEMÁTICAS"/>
            </div>
            <div className='col-md-3'></div>
        </div>
        
    </div>
}

export default Simulacros;