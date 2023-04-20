import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { deleteTasks, editTasks, getAllTasks } from "../../redux/actions/actions";

const TaskCard = ({ task, filterActive }) => {
	if(filterActive==="completed"){
		var [isCompleted, setIsCompleted] = useState(true);
	}
	else if(filterActive==="uncompleted"){
		var [isCompleted, setIsCompleted] = useState(false);
	}
	else if(filterActive==="all"){
		var [isCompleted, setIsCompleted] = useState(task?.isCompleted==="true" ? true : false);
	}
	const dispatch = useDispatch()

	const handleChangeIsCompleted = () => {
		setIsCompleted(prev=>!prev)
		dispatch(editTasks(task?._id, {...task, isCompleted: !isCompleted}))
	}

	const handleDelete = () => {
		dispatch(deleteTasks(task?._id))
	}

	return (
		<div key={task?.id} className="grid grid-cols-3 mt-4">
			<div className="flex items-center">
				<input
					type="checkbox"
					name="completed"
					id="completed"
					className="mr-4
      px-4 scale-150"
					checked={isCompleted ? true : false}
					onChange={() => handleChangeIsCompleted()}
				/>
				<p className={`${isCompleted && "line-through text-gray-500"} capitalize`}>
					{task?.title}
				</p>
			</div>
			<div className="flex items-center">
				<p>{isCompleted ? "Completed" : "In progress"}</p>
			</div>
			<div className="grid grid-cols-3 gap-4 mr-2">
        {/* <button className="bg-[#54b4d3] text-white py-2 rounded-md">Read more</button> */}
        <button className="bg-[#14a44d] text-white py-2 rounded-md">Edit</button>
        <button className="bg-[#dc4c64] text-white py-2 rounded-md cursor-pointer"
				onClick={handleDelete}>Delete</button>
      </div>
		</div>
	);
};

export default TaskCard;
