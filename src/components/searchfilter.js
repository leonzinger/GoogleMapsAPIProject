import React, { Component } from 'react'

class ListItem extends Component {

    onClick = () => {
        this.props.onClick(this.props.venue);
    }

    render() {
        const { venue } = this.props;
        return <li onClick={this.onClick} className='list-item' key={venue.id}>{venue.name}</li>
    }
}

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
    
    filterVenues = (venues, filterBy) => venues.filter((venue) => venue.name.toLowerCase().includes(filterBy.toLowerCase()))
    
    render() {
        const { venues } = this.props;
        const { filterBy } = this.state;
        const list = this.filterVenues(venues, filterBy).map(venue => {
            return (
                <ListItem venue={venue} onClick={this.props.onClick} />
            )
        })

        return  (
            <div className='search-filter'>
                <ol>
                    {list}
                </ol>
                <input type="text" onChange={this.filter} value={filterBy} />
            </div>
        )
    }
}

export default SearchFilter