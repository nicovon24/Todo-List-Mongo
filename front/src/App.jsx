import './App.css'
import { useEffect } from "react"
import {useDispatch} from "react-redux"
import {getAllTasks} from "./redux/actions/actions"
import {Route, Routes} from "react-router-dom"
import Home from './components/Home/Home'
import axios from "axios"
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllTasks("all"))
  }, [dispatch])

  return (
    <div className="App main-bg min-h-screen py-24 flex flex-col justify-center">
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App
