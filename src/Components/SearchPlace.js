import React from 'react';
import '../Styles/SearchPlace.css';

class SearchPlace extends React.Component {
  render() {
    return (
        <div className="card border-dark mb-3">
          <div className="card-body text-dark">
          <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="10999 Berlin" 
              aria-label="10999 Berlin" 
              aria-describedby="button-addon2"></input>
            <div className="input-group-append">
              <button 
                className="btn btn-primary" 
                type="button" 
                id="button-addon2">Search</button>
            </div>
            </div>
          </div>
        </div>
    );
  }
}
export default SearchPlace;