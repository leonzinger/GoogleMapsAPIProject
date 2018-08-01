import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps"
import MarkerInfo from './markerinfo'

class Map extends Component {
    render() {
        const { center, markers, selectedMarker,openWindow,closeWindow } = this.props

        return (
            <GoogleMap
                defaultZoom={15}
                defaultCenter={center}
                options={{streetViewControl: false, mapTypeControl: false}}>
                {markers.map((venue, i) => (
                    <MarkerInfo
                        key={i}
                        id={venue.id}
                        position={venue.location}
                        title={venue.name}
                        animation={!!selectedMarker && venue.id === selectedMarker.id ? 1 : 2}
                        openwindow={() => openWindow(venue)}
                        closewindow={closeWindow}
                        isOpen={!!selectedMarker && venue.id === selectedMarker.id}
                        >
                    </MarkerInfo>
                    ))
                }
            </GoogleMap>
        )
    }
}


export default withScriptjs(withGoogleMap((Map)))