import React, { Component } from 'react';
import Map from './components/map'
import SearchFilter from './components/searchfilter'
import {Client_ID, Client_Secret, Version} from './api/foursquare'
import { MAP_API_KEY } from './api/googleAPI'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      venues: [],
      center: {
        lat: 31.6687118,
        lng: 34.5738893,
      }
    }
  }

  componentDidMount() {
    const latLng = this.state.center.lat + ',' + this.state.center.lng
    const url = `https://api.foursquare.com/v2/venues/search?${Version}&ll=${latLng}&${Client_ID}&${Client_Secret}`

    fetch(url)
    .then(res => res.json())
    .then(data => {
      this.setState({venues: data.response.venues})            
    })
    .catch(err => {
      console.log('We are unable to fetch the data you are looking for', err);
    })
  }

  render() {
    const { venues, center } = this.state

    return (
      <div className="App">
        <div className='search-filter-container'>
          {this.state.venues.length > 0 &&
            <SearchFilter
                venues={venues} 
                /> 
          }
        </div>
          <div className='map-container' role='application'>        
            <Map
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${MAP_API_KEY}&v=3`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100vh` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              center={center}
              markers={venues}
              />
          </div>
      </div>
    )
  }
}

export default App;
