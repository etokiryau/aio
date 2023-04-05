import React from 'react';

import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const _apiKey = 'AIzaSyBT6vdXuYz-I4-aghki8iJunxA1nkG2s34';

const containerStyle = {
	marginTop: '15px',
	width: '300px',
	height: '200px',
	zIndex: '0'
};

const options = {
	streetViewControl: false,
	mapTypeControl: false
};

const center = {
	lat: 50.875,
	lng: -0.2
};

function GoogleMapService() {
	return (
		<LoadScript googleMapsApiKey={_apiKey}>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				options={options}
				zoom={12}
			>
				<MarkerF position={center} />
			</GoogleMap>
		</LoadScript>
	);
}

export default React.memo(GoogleMapService);