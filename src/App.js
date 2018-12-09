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
      places: [
        { name: "name1",
          url: "url1",
          rating: "1",
        },
        { name: "name2",
        url: "url2",
        rating: "1",
        },
        { name: "name3",
        url: "url3",
        rating: "1",
        },
      ],
      participants: [
        { name: "Max Mustermann"},
        { name: "Kevin Müller"},
        { name: "Dennis Mustermann"},
        { name: "Donald Trump"},
      ],
    };
    // this.fetchPlaces();
  };

  fetchPlaces = () => {
    fetch(properURL)
    .then(res => res.json())
    .then(res => this.setState({places: res}))
    .then(console.log(this.state))
  }

  addParticipant = (event) => {
    const newstate = {
      ...this.state,
    }
    newstate.participants.push(event);
    this.setState({newstate});
  }

  render() {
    return (
      <div className="App">
        <div className="Title">
          <h1>Lunch Place</h1>
        </div>
      
      <div className="main">
        <SearchPlace />
        <div className="mainLists">
          <div className="ParticipantsList">
            <ListParticipants participants={this.state.participants} />
          </div>
          <div className="PlacesList">
            <ListPlaces places={this.state.places} />
          </div>
        </div>
        <AddParticipant addParticipant={this.addParticipant} />
      </div>
      </div>
    );
  }
}

export default App;
