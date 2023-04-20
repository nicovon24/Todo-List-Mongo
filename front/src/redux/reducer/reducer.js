import {
	DELETE_TASKS,
	FILTER_TASKS,
	GET_ALL_TASKS,
	POST_TASKS,
} from "../actions/action-types";

const initialState = {
	allTasks: "",
	filteredTasks: "",
};

const rootReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_ALL_TASKS:
			return {
				...state,
				allTasks: payload,
				filteredTasks: payload,
			};
		case FILTER_TASKS:
			return {
				...state,
				filteredTasks: payload,
			};
		case POST_TASKS:
			return {
				...state,
				allTasks: [...state.allTasks, payload],
				filteredTasks: [...state.allTasks, payload],
			};
		case DELETE_TASKS:
			const updatedTasks = state.allTasks.filter((task) => task._id !== payload);
			return {
				...state,
				allTasks: updatedTasks,
				filteredTasks: updatedTasks,
			};
		default:
			return {
				...state,
			};
	}
};
export default rootReducer;
