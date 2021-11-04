import React, { useContext, useState } from 'react';
import CamionContext from '../hooks/camionContext';

const Camion = ({ camion }) => {
	const camionContext = useContext(CamionContext);
	const { fnGetTruck } = camionContext;

	const { nombre, descripcion, _created_date } = camion;

	const [camionSeleccionado, setCamionSeleccionado] =
		useState(false);

	const onClick = () => {
		fnGetTruck(camion);
		setCamionSeleccionado(true);
	};
	return (
		<div
			onClick={onClick}
			className={
				camionSeleccionado
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
