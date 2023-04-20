import {
	DELETE_TASKS,
	EDIT_TASKS,
	FILTER_TASKS,
	GET_ALL_TASKS,
	POST_TASKS,
} from "./action-types";
import axios from "axios";

export const getAllTasks = () => async (dispatch) => {
	try {
		let response = await axios("/tasks");
		return dispatch({
			type: GET_ALL_TASKS,
			payload: response.data,
		});
	} catch (err) {
		console.log(err);
	}
};

export const filterTasks = (active) => async (dispatch) => {
	try {
		let response = await axios(`/tasks/filters?active=${active}`);
		return dispatch({
			type: FILTER_TASKS,
			payload: response.data,
		});
	} catch (err) {
		console.log(err);
	}
};

export const postTasks = (data) => async (dispatch) => {
	try {
		const response = await axios.post(`/tasks`, data);
		return dispatch({
			type: POST_TASKS,
			payload: response.data,
		});
	} catch (err) {
		console.log(err);
	}
};

export const deleteTasks = (id) => async (dispatch) => {
	try {
		await axios.delete(`/tasks/${id}`);
		return dispatch({
			type: DELETE_TASKS,
			payload: id,
		});
	} catch (err) {
		console.log(err);
	}
};

export const editTasks = (id, data) => async (dispatch) => {
	try {
		const response = await axios.put(`/tasks/${id}`, data);
		return dispatch({
			type: EDIT_TASKS,
			payload: response.data,
		});
	} catch (err) {
		console.log(err);
	}
};
