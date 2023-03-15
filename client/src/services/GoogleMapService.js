import React, { useState, useCallback } from 'react';

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const _apiKey = 'AIzaSyBT6vdXuYz-I4-aghki8iJunxA1nkG2s34';

const containerStyle = {
  marginTop: '15px',
  width: '300px',
  height: '200px',
  zIndex: '0'
};
  
const center = {
  lat: 50.875,
  lng: -0.2
};

const options= {
  streetViewControl: false,
  mapTypeControl: false,
}

const position = {
  lat: 50.875,
  lng: -0.2
}
  
function GoogleMapService() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: _apiKey
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        options={options}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={position}/>
      </GoogleMap>
  ) : <></>
}
  
export default React.memo(GoogleMapService)
