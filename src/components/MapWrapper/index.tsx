import { useState } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import Map from './Map';
import Marker from './Marker';

const render = (status: Status) => <h1>{status}</h1>;

function MapWrapper() {
  const [clicks, setClicks] = useState<google.maps.LatLng>();
  const [zoom, setZoom] = useState(12); // initial zoom
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: -7.23718,
    lng: -39.3222,
  });

  const onClick = (e: google.maps.MapMouseEvent) => {
    // avoid directly mutating state
    setClicks(e.latLng!);
  };

  const onIdle = (m: google.maps.Map) => {
    console.log('onIdle');
    setZoom(m.getZoom()!);
    setCenter(m.getCenter()!.toJSON());
  };

  return (
    <Wrapper
      apiKey={String(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)}
      render={render}
    >
      <Map
        center={center}
        onClick={onClick}
        onIdle={onIdle}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
      >
        <Marker position={clicks} />
      </Map>
    </Wrapper>
  );
}

export default MapWrapper;
