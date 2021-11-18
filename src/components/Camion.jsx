import React, { useContext, useState } from 'react';
import CamionContext from '../hooks/camionContext';

const Camion = ({ camion, setIdCamion, idCamion }) => {
	const camionContext = useContext(CamionContext);
	const { fnGetTruck, fnClearTruck } = camionContext;

	const { nombre, descripcion, _created_date } = camion;

	const [camionSeleccionado, setCamionSeleccionado] =
		useState(false);

	const onClick = () => {
		if (idCamion === camion._id) {
			fnClearTruck();
			setIdCamion('');
			setCamionSeleccionado(false);
		} else {
			setIdCamion(camion._id);
			fnGetTruck(camion);
			setCamionSeleccionado(true);
		}
	};
	return (
		<div
			onClick={onClick}
			className={
				camionSeleccionado && idCamion === camion._id
					? 'camion camionSeleccionado'
					: 'camion'
			}>
			<h2>{nombre.toUpperCase()}</h2>
			<p>{descripcion}</p>
			<p>{_created_date ? _created_date : 'Sin fecha'}</p>
		</div>
	);
};

export default Camion;
