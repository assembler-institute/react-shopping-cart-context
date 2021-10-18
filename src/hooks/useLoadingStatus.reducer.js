import { useReducer } from "react";

const actionTypes = {
	FETCH_SUCCESS: Symbol("FETCH_SUCCESS"),
	FETCH_ERROR: Symbol("FETCH_ERROR"),
};

const initialState = {
	hasLoaded: false,
	hasError: false,
	loadingError: null,
};

function reducer(state, action) {
	const { type, payload } = action;

	switch (type) {
		case actionTypes.FETCH_SUCCESS:
			return {
				...state,
				hasLoaded: true,
			};
		case actionTypes.FETCH_ERROR:
			return {
				hasLoaded: true,
				hasFailed: true,
				loadingError: payload,
			};
	}
}

export default function useLoadingStatus() {
	return useReducer(reducer, initialState);
}
