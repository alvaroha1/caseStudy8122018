import React, { Component } from 'react';
import './App.css';

import SearchPlace from './Components/SearchPlace';
import ListParticipants from './Components/ListParticipants';
import ListPlaces from './Components/ListPlaces';
import AddParticipant from './Components/AddParticipant';

const url = 'https://api.foursquare.com/v2/venues/explore';
const qs = `
  ?client_id=${clientID}
  &client_secret=${clientSecret}
  &query=lunch
  &near=${address}
  &v=20170801
  &limit=3`;

//This should be in an enviroment variable
const clientID = '130YH51DRDHGRVDRIL4PLCFC5XH5A33LNA14SSGKZWRCV5LG';
const clientSecret = 'RVQKTJGZPRCPEAMR3R2BQKTR5VJ3RQMU5AM4UD1A5BIPK3TN';
const address = 'Berlin';
const properURL = url+qs;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      participants: [],
    };
    this.fetchPlaces();
  };

  fetchPlaces = () => {
    fetch(properURL)
    .then(res => res.json())
    .then(res => this.setState({places: res}))
    .then(console.log(this.state))
  }

  render() {
    return (
      <div className="App">
      <div className="Title"><h1>Lunch Place</h1></div>
      <div className="main">
        <SearchPlace></SearchPlace>
        <div classNames="List">
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
