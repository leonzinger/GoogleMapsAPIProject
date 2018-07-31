import React, { Component } from 'react'

class SearchFilter extends Component {

    
    
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