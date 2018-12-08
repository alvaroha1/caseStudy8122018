import React from 'react';
import Participant from './Participant';

class ListParticipants extends React.Component {
  render() {
    return (
        <div className="card border-dark mb-3">
          <Participant></Participant>
          <Participant></Participant>
          <Participant></Participant>
          <Participant></Participant>
        </div>
    );
  }
}
export default ListParticipants;