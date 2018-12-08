import React, { Component } from 'react';
import './App.css';

import SearchPlace from './Components/SearchPlace';
import ListParticipants from './Components/ListParticipants';
import ListPlaces from './Components/ListPlaces';
import AddParticipant from './Components/AddParticipant';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      participants: []
    };
    this.fetchPlaces();
  };

  render() {
    return (
      <div className="App">
      <div className="Title"><h1>Lunch Place</h1></div>
      <div className="main">
        <SearchPlace></SearchPlace>
        <div classNames="Lists">
          <div className="ParticipantsList">
            <ListParticipants></ListParticipants>
          </div>
          <div className="PlacesList">
            <ListPlaces></ListPlaces>
          </div>
        </div>
        <AddParticipant></AddParticipant>
      </div>
      </div>
    );
  }
}

export default App;
