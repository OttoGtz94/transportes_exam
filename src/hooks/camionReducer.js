import {
	GET_TRUCKS,
	GET_TRUCK,
	CHANGE_COOR_ORIGEN,
	CHANGE_COOR_DESTINO,
	CLEAR_TRUCK,
} from '../types';

//eslint-disable-next-line
export default (state, action) => {
	switch (action.type) {
		case GET_TRUCKS:
			return {
				...state,
				camiones: action.payload,
			};
		case GET_TRUCK:
			return {
				...state,
				camionSelecto: action.payload,
			};
		case CLEAR_TRUCK:
			return {
				...state,
				camionSelecto: {},
			};
		case CHANGE_COOR_ORIGEN:
			return {
				...state,
				coordenadasOrigen: action.payload,
			};
		case CHANGE_COOR_DESTINO:
			return {
				...state,
				coordenadasDestino: action.payload,
			};
		default:
			break;
	}
};
