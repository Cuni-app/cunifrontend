import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginFormulario from "../components/LoginFormulario"
const LoginPage = (props) => {

    const [error, setError] = useState("")

    const navigate = useNavigate()

    const loginHandler = async (username, password) => {
        props.logFunction(true)
        navigate("/simulacros")
        
    }

    return <div>
        <h1>Login</h1>
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
            <LoginFormulario 
                    loginOnClick={ loginHandler }
                    modo={"login"}/>
                    {
                (() => {
                    if (error !== "") {
                        return <div className="mt-4 alert alert-danger">Error Login</div>
                    }
                })(error)
            }
            </div>
            <div className="col-md-3"></div>
        </div>
    </div>
}

export default LoginPage;