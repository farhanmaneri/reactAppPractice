import { useContext } from "react"
import AuthContext from "../../context/AuthContext";
import Home from "../home/Home";
import Login from "../login/Login";
const AuthHandler = ({onLogin}) => {
   const authCtx = useContext(AuthContext);
    return authCtx.isLogedIn ? <Home/> : <Login onLogin={onLogin}/>
}
export default AuthHandler;