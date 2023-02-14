import { useEffect } from "react"
import { Outlet,Link} from "react-router-dom"
import axiosClient from "../axios-client.js"
import { useStateContext } from "../contexts/ContextProvider.jsx"
import { Navigate} from "react-router-dom";
import "../index.css"
export default function DefaultLayout() {
    const {user, token,notification, setUser, setToken } = useStateContext();

   if(!token){
    return <Navigate to="/login"/>
   }

   const onLogout = ev => {
    ev.preventDefault()

    axiosClient.post('/logout')
      .then(() => {
        setUser({})
        setToken(null)
      })
  }

    useEffect(() => {
        axiosClient.get('/user')
          .then(({data}) => {
             setUser(data)
          })
      }, [])


  return (
      <div id="defaultLayout">
          <aside>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/Users">Users</Link>
          </aside>
          <div className="content">
              <header>
                  <div>Header</div>
                  <div>
                      {user.name}
                      <a href="#" onClick={onLogout} className="btn-logout">
                          logout
                      </a>
                  </div>
              </header>
              <main>
                  <Outlet />
              </main>
              {notification && (
                  <div className="notification">{notification}</div>
              )}
          </div>
      </div>
  );
}
