import React from 'react';
import Participant from './Participant';
import NewParticipant from './NewParticipant';

class ListParticipants extends React.Component {
  render() {
    return (
        <div className="card border-dark mb-3">
        <h4>Participants</h4>
          <Participant name="Max Mustermann"></Participant>
          <Participant name="Kevin Müller"></Participant>
          <Participant name="Dennis Mustermann"></Participant>
          <Participant name="Donald Trump"></Participant>
          <NewParticipant></NewParticipant>
        </div>
    );
  }
}
export default ListParticipants;