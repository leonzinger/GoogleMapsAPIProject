import React, { Component } from 'react'

class ListItem extends Component {

    onClick = () => {
        this.props.onClick(this.props.venue);
    }

    render() {
        const { venue } = this.props;
        return <li onClick={this.onClick}
                   onKeyPress={this.onClick} 
                   className='list-item'
                   aria-labelledby='location' 
                   key={venue.id}
                   tabIndex={0}
                   role='button'>
                {venue.name}
                </li>
    }
}

export default ListItem 