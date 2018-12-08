import React from 'react';
import Participant from './Participant';
import NewParticipant from './NewParticipant';

class ListParticipants extends React.Component {
  render() {
    return (
      <div className="card border-dark mb-3">
          <h4>Participants</h4>
            {this.props.participants.map (participant => {
              return <Participant name={participant.name}/>
            })}
            <NewParticipant></NewParticipant>
      </div>
    );
  } 
}
export default ListParticipants;