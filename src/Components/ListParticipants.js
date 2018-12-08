import React from 'react';
import Participant from './Participant';
import NewParticipant from './NewParticipant';

const listParticipants = (props) => {
  const currentParticipants = props.participants.map((name, i)=>(
		<Participant
			key={i}
			
		/>
	))
   
  
  return (
    <div className="card border-dark mb-3">
        <h4>Participants</h4>
          {currentParticipants}
          <Participant name="Max Mustermann"></Participant>
          <Participant name="Kevin Müller"></Participant>
          <Participant name="Dennis Mustermann"></Participant>
          <Participant name="Donald Trump"></Participant>
          <NewParticipant></NewParticipant>
        </div>
  );
} 

export default listParticipants;