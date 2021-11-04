import React, { useContext, useEffect } from 'react';
import CamionContext from '../hooks/camionContext';
import Camion from './Camion';
import Autocomplete from './Autocomplete';

const Main = () => {
	const camionContext = useContext(CamionContext);
	const {
		camiones,
		camionSelecto,
		coordenadasOrigen,
		coordenadasDestino,
		fnGetTrucks,
		fnChangeCoorOrigin,
		fnChangeCoorDestiny,
		fnCotizar,
	} = camionContext;

	useEffect(() => {
		fnGetTrucks();
		//eslint-disable-next-line
	}, []);
	const onChangueOrigin = coor => {
		fnChangeCoorOrigin(coor);
	};

	const onChangeDestiny = coor => {
		fnChangeCoorDestiny(coor);
	};
	return (
		<div className='main'>
			{/* <input type='text' placeholder='Direccion' /> */}
			<div className='formMaps'>
				<div className='map'>
					<p>Origen</p>
					<Autocomplete
						onChange={onChangueOrigin}
						coordenadasOrigen={coordenadasOrigen}
						isDestiny={false}
					/>
				</div>
				<div className='map'>
					<p>Destino</p>
					<Autocomplete
						onChange={onChangeDestiny}
						coordenadasDestino={coordenadasDestino}
						isDestiny={true}
					/>
				</div>
			</div>
			<div className='camiones'>
				{camiones.map(camion => (
					<Camion key={camion._id} camion={camion} />
				))}
			</div>
			<div className='btnCotizar'>
				<button
					onClick={() =>
						fnCotizar({
							tipo_unidad: camionSelecto.nombre,
							origen: {
								lat: coordenadasOrigen.lat,
								lng: coordenadasOrigen.lng,
							},
							destino: {
								lat: coordenadasDestino.lat,
								lng: coordenadasDestino.lng,
							},
						})
					}>
					Cotizar
				</button>
			</div>
		</div>
	);
};

export default Main;
