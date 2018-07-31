import React, {Component} from 'react'
import { Marker, InfoWindow } from 'react-google-maps'

class MarkerInfo extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            isOpen: false
        }
    }

    handleToggleOpen = () => {
        this.setState({
            isOpen: true
        });
    }
    
    handleToggleClose = () => {
        this.setState({
            isOpen: false
        });
    }

    render() {
        const {i, id, position, title} = this.props

        return (
            <Marker
                key={i}
                id={id}
                position={position}
                title={title}
                tabIndex={0}
                animation={2}
                onClick={() => this.handleToggleOpen()}>

		        {this.state.isOpen &&
                    <InfoWindow onCloseClick={this.handleToggleClose}>
                        <div>{this.props.title}</div>
                    </InfoWindow>
	 	        }
		    </Marker>
        )
    }
}

export default MarkerInfo