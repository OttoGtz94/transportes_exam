import { useReducer } from 'react';
import camionContext from './camionContext';
import camionReducer from './camionReducer';
import clienteAxios from '../config/axios';
import {
	GET_TRUCKS,
	CHANGE_COOR_ORIGEN,
	CHANGE_COOR_DESTINO,
	GET_TRUCK,
} from '../types';

const CamionState = props => {
	const initialState = {
		camiones: [],
		camionSelecto: {},
		coordenadasOrigen: {
			lat: 19.4326077,
			lng: -99.133208,
		},
		coordenadasDestino: {
			lat: 19.4326077,
			lng: -99.133208,
		},
	};

	const [state, dispatch] = useReducer(
		camionReducer,
		initialState,
	);

	const fnGetTrucks = async () => {
		try {
			const camiones = await clienteAxios.get(
				'/tipos-unidad',
			);
			dispatch({
				type: GET_TRUCKS,
				payload: camiones.data,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const fnGetTruck = camion => {
		dispatch({
			type: GET_TRUCK,
			payload: camion,
		});
	};

	const fnChangeCoorOrigin = newCoor => {
		dispatch({
			type: CHANGE_COOR_ORIGEN,
			payload: newCoor,
		});
	};

	const fnChangeCoorDestiny = newCoor => {
		dispatch({
			type: CHANGE_COOR_DESTINO,
			payload: newCoor,
		});
	};

	const fnCotizar = async body => {
		try {
			console.log(body);
			const res = await clienteAxios.post('/cotizar', body);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<camionContext.Provider
			value={{
				camiones: state.camiones,
				camionSelecto: state.camionSelecto,
				coordenadasOrigen: state.coordenadasOrigen,
				coordenadasDestino: state.coordenadasDestino,
				/* lat: state.lat,
				lng: state.lng, */
				fnGetTrucks,
				fnGetTruck,
				fnChangeCoorOrigin,
				fnChangeCoorDestiny,
				fnCotizar,
			}}>
			{props.children}
		</camionContext.Provider>
	);
};

export default CamionState;
