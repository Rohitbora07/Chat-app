  import { RouterProvider } from "react-router-dom"
  import { router } from "./router"
  import { useEffect } from "react"
  import userStore from "../store"
  import api from "../utils/axios"
import { CHECK_AUTH_ROUTE } from "../constants/routes"


  function App() {

    const setUser = userStore((state) => state.setUser);
    const setAuthLoading = userStore((state) => state.setAuthLoading);
    const authLoading = userStore((state) => state.authLoading);


    useEffect(() => {
      const checkAuth = async () => {
        try {
          const res = await api.get(CHECK_AUTH_ROUTE)
          if (res.data.success) {
            setUser(res.data.user)
          }
        } catch  {
          setUser(null)
        }finally {
          setAuthLoading(false)
        }
      }
      checkAuth()
    }, [setUser, setAuthLoading])

    if (authLoading) return <div>Loading...</div>


    return (
      <RouterProvider router={router} />
    )
  }

  export default App
