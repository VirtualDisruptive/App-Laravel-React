import { Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider.jsx"
import {Navigate} from "react-router-dom";

export default function GuesstLayout() {
    const{token } = useStateContext()
   if(token){
    return <Navigate to="/"/>
   }
  return (
    <div>
        <Outlet/>
    </div>
  )
}
