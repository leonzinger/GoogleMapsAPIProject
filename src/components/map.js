import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps"
import MarkerInfo from './markerwithinfowindow'

class Map extends Component {
    render() {
        const { center, markers } = this.props

        return (
            <GoogleMap
                defaultZoom={14}
                defaultCenter={center}
                options={{streetViewControl: false, mapTypeControl: false}}>
                {markers.map((venue, i) => (
                    <MarkerInfo
                        key={i}
                        id={venue.id}
                        position={venue.location}
                        title={venue.name}
                >
                    </MarkerInfo>
                    ))
                }
            </GoogleMap>
        )
    }
}


export default withScriptjs(withGoogleMap((Map)))