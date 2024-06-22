import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import '../styles/footer.css';

const center = {
  lat: 52.229675,
  lng: 21.012230
};

const Footer: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'process.env.API_KEY ||',
  }); 

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
  }, []);


  return (
    <>
    <footer className='footer flex max-lg:flex-col'>
      <div className='map xl:mb-12 xs:mb-6 lg:mx-14 sm:mx-10 xs:mx-6'>
        <h2 className='instructions my-8'>Jak Do Nas Dojechać</h2>
        {isLoaded && (
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={15}
            onLoad={onLoad}
          >
            <Marker position={center} title="map" />
          </GoogleMap>
        )}
      </div>
      <div className='contact sm:mx-12 xs:mr-0 xs:ml-6 my-6'>
        <h2 className='instructions mt-2 mb-8'>Kontakt</h2>
        <div className='wrapper-info flex'>
          <div className='info mb-8 mr-10'>
            <h4 className='font-extrabold'>Odwiedź nas</h4>
              <p>Warszawa</p>
              <p>Kowalskiego 1B</p>
              <p>Polska</p>
          </div>
          <div className='info mb-8 ml-5'>
            <h4 className='font-extrabold'>Godziny otwarcia</h4>
            <p>pn - pt  15:00 - 19:00</p>
            <p>sb - nd  7:00 - 21:00</p>
          </div>
        </div>
        <div className='wrapper-info flex'>
          <div className='info mr-10 mb-8'>
            <h4 className='font-extrabold'>Napisz do nas</h4>
            <p className='text-blue-500 underline'>dmuchane.zamki@onet.pl</p>
          </div>
          <div className='info ml-8 mb-8'>
            <h4 className='font-extrabold'>Zadzwoń</h4>
            <p className='text-blue-500 underline'>+48 123 123 123</p>
          </div>
        </div>
      </div>

    </footer>
    <aside className='bottom-text sm:pl-12 xs:p-6 py-4 my-2 '>
        <h5>Lorem ipsum dolor sit amet consectetur. Pretium eget aliquam praesent vitae mauris pulvinar quam ultricies.</h5>
      </aside>
    </>
  );
};

export default Footer;
