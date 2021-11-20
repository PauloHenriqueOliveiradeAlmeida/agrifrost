import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useState } from 'react'
function Map(props) {
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
        navigator.geolocation.getCurrentPosition((pos) => {
            setLatitude(pos.coords.latitude);
            setLongitude(pos.coords.longitude);
        })
    }
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        GoogleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_CLOUD_API
    });

    return (
        <div>
            {
            isLoaded ? (
            <GoogleMap mapContainerStyle={{width: "100%", height: "100vh"}} 
            center={{
                lat: latitude,
                lng: longitude
            }}
            zoom={15} >
                    </GoogleMap>
                ) : <></>
            }
        </div>
    )
}
export default Map;
