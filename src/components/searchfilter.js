import React, { Component } from 'react'

class SearchFilter extends Component {
        state = { 
            venues: [],
            markers: []
        }
    
    componentDidMount() {
        this.setState({venues: this.props.venues})
    }

    render() {
        const { venues } = this.props

        const list = venues.map(venue => {
            return (
                <li className='list-item' key={venue.id}>{venue.name}</li>
            )
        })

        return  (
            <div className='search-filter'>
                <ol>
                    {list}
                </ol>
                
            </div>
        )
    }
}

export default SearchFilter