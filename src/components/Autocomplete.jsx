import {
	StandaloneSearchBox,
	LoadScript,
	GoogleMap,
} from '@react-google-maps/api';
import React, { useRef } from 'react';
// import "./Autocomplete.css";

const libraries = ['places'];

export default function Autocomplete({
	onChange,
	coordenadasOrigen,
	coordenadasDestino,
	isDestiny,
}) {
	const autocomplete = useRef();
	//const [location, setLocation] = useState(null);
	const onLoad = a => {
		autocomplete.current = a;
	};

	const containerStyle = {
		width: '100%',
		height: '300px',
	};

	const onPlaceChanged = () => {
		if (autocomplete.current !== null) {
			onChange({
				lat: autocomplete.current
					.getPlaces()[0]
					.geometry.location.lat(),
				lng: autocomplete.current
					.getPlaces()[0]
					.geometry.location.lng(),
			});

			/* console.log(
				autocomplete.current
					.getPlaces()[0]
					.geometry.location.lat(),
			);
			console.log(
				autocomplete.current
					.getPlaces()[0]
					.geometry.location.lng(),
			); */
		} else {
			console.log('Autocomplete is not loaded yet!');
		}
	};
	return (
		<>
			<LoadScript
				libraries={libraries}
				googleMapsApiKey='AIzaSyAJf2dFo6JBXahwKdm-sLd_3TWg5xaKD7Y'>
				<StandaloneSearchBox
					// ref={autocomplete}
					onLoad={onLoad}
					options={['bounds']}
					onPlacesChanged={onPlaceChanged}>
					<input
						type='text'
						placeholder='Customized your placeholder'
						/* style={{
							boxSizing: `border-box`,
							border: `1px solid transparent`,
							width: `100%`,
						}} */
						className='inputMaps'
					/>
				</StandaloneSearchBox>
				<GoogleMap
					mapContainerStyle={containerStyle}
					zoom={20}
					center={
						!isDestiny
							? coordenadasOrigen
							: coordenadasDestino
					}></GoogleMap>
			</LoadScript>
		</>
	);
}
