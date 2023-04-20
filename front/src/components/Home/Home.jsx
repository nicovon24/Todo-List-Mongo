import {useDispatch, useSelector} from "react-redux"
import { useState } from "react"
import TaskCard from "../TaskCard/TaskCard"
import { filterTasks, getAllTasks, postTasks } from "../../redux/actions/actions"

const Home = () => {
  const [newTask, setNewTask] = useState({
    title: ""
  })
  
  const [filterActive, setFilterActive] = useState("all")

  const dispatch = useDispatch()

  const handleChangeActive = (active) => {
    setFilterActive(active)

    if(active==="all"){
      dispatch(getAllTasks())
    }
    if(active==="completed"){
      dispatch(filterTasks("completed"))
    }
    if(active==="uncompleted"){
      dispatch(filterTasks("uncompleted"))
    }
  }

  const handleChange = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitAddTask = () => {
    dispatch(postTasks(newTask))
  }

  const {filteredTasks} = useSelector(s=>s)

  return(
    <div className="bg-white min-h-[70vh] w-11/12 md:w-10/12 xl:w-9/12 2xl:w-8/12 mx-auto pb-4 rounded-3xl">
      
      {/* form */}
      <form className="grid grid-cols-3 xl:grid-cols-4 2xl:xl:grid-cols-5 gap-2 mt-8 mx-4">
        <input type="text" name="title" id="title" placeholder="New task..." 
        className="pl-2 border-2 py-2 rounded-md col-span-2 xl:col-span-3 2xl:col-span-4"
        value={newTask?.title} onChange={handleChange}/>
        <button type="button" className="bg-[#54b4d3] text-white font-bold px-6 py-2 rounded-md w-28"
        onClick={handleSubmitAddTask}>ADD</button>
      </form>

      {/* filters */}
      <div className="ml-4 mt-8">
        <button className={`mr-8 text-lg hover:bg-gray-100 px-6 pb-4 pt-2 ${filterActive==="all" && "isActive"}`}
        onClick={()=>handleChangeActive("all")}>All</button>
        <button className={`mr-8 text-lg hover:bg-gray-100 px-6 pb-4 pt-2 ${filterActive==="completed" && "isActive"}`}
        onClick={()=>handleChangeActive("completed")}>Completed</button>
        <button className={`text-lg  hover:bg-gray-100 px-6 pb-4 pt-2 ${filterActive==="uncompleted" && "isActive"}`}
        onClick={()=>handleChangeActive("uncompleted")}>In progress</button>
      </div>

      {/* tasks mapped */}
      <div className="pl-4 pt-6">
        {filteredTasks?.length>0 && 
        (filteredTasks?.map((task)=><TaskCard task={task} filterActive={filterActive}/>))}
      </div>
    </div>
  )
}

export default Home