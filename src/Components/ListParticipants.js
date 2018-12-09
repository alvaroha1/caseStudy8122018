import React from 'react';
import Participant from './Participant';
import '../Styles/ListParticipants.css';

class ListParticipants extends React.Component {
  render() {
    return (
      <div className="list card border-dark mb-3">
          <h4>Participants</h4>
            {this.props.participants && this.props.participants.length > 0 
            ? this.props.participants.map (participant => {
              return <Participant key={participant.name} name={participant.name}/>
            }) 
            : <h5><p>Please add a new Participant</p></h5> }
      </div>
    );
  } 
}
export default ListParticipants;
