import React, { Component } from 'react'
import ListItem from './listItem'

class SearchFilter extends Component {

    state = {
        filterBy: '',
    }

    componentDidMount() {
        this.props.onChange(this.props.venues);
    }

    filter = (e) => {
        this.setState({ filterBy: e.target.value });
        this.props.onChange(this.filterVenues(this.props.venues, e.target.value));
    }
    
    filterVenues = (venues, filterBy) => venues.filter(venue => venue.name.toLowerCase().includes(filterBy.toLowerCase()))
    
    render() {
        const { venues } = this.props;
        const { filterBy } = this.state;
        const list = this.filterVenues(venues, filterBy).map(venue => {
            return (
                <ListItem venue={venue}
                          key={venue.id} 
                          onClick={this.props.onClick}
                          onKeyPress={this.props.onClick}
                          />
            )
        })

        return  (
            <div className='search-filter'>
                <input className='search-input'
                       autoFocus={true} 
                       placeholder='Search...' 
                       type="text" 
                       onChange={this.filter} 
                       value={filterBy} 
                       aria-labelledby='search filter'
                       role='search'
                       />
                
                <ol className ='search-list-items'>
                    {list}
                </ol>
            </div>
        )
    }
}

export default SearchFilter