import React, { Component } from 'react';
import LunchPlace from './LunchPlace';
import '../Styles/ListPlaces.css';


class ListPlaces extends React.Component {
  render() {
    return (
        <div className="restaurants card border-dark mb-3">
          {this.props.places && this.props.places.length > 0 
            ? this.props.places.map (place => {
              return <LunchPlace key={place.name} name={place.name} url={place.url} rating={place.rating} />
          }) 
          : <h5><p>Information not available</p></h5> }
          
        </div>
    );
  }
}
export default ListPlaces;