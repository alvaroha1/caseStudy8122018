import React from 'react';
import '../Styles/LunchPlace.css';

class LunchPlace extends React.Component {
  render() {
    return (
        <div className="Place card border-dark mb-3">
          <p>{this.props.name}</p>
          <p>{this.props.url}</p>
          <p><strong>{this.props.rating}</strong></p>
        </div>
    );
  }
}
export default LunchPlace;