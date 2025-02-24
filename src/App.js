
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Alogin from "./components/body/Alogin"
// import Asignup from "./components/body/Asignup"
import Notfound from "./components/Notfound"
import Insta from "./components/body/Insta"

// import { useSelector, useDispatch } from "react-redux"
// import { increment } from "./redux/counter"

function App() {
  // const navigate = useNavigate();

  return (
    <>
    
      
      <Routes>
        <Route exact path='/login/facebook' element={<Alogin />} />
        <Route exact path='/' element={<Insta />} />
        {/* <Route exact path='/admin/signup' element={<Asignup />} /> */}
        <Route exact path='*' element={<Notfound />} />
      </Routes>

    </>
  )
}

export default App
