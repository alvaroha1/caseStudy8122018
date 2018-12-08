import React from 'react';
import LunchPlace from './LunchPlace';

class ListPlaces extends React.Component {
  render() {
    return (
        <div className="card border-dark mb-3">
          <LunchPlace></LunchPlace>
          <LunchPlace></LunchPlace>
          <LunchPlace></LunchPlace>
        </div>
    );
  }
}
export default ListPlaces;