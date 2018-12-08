import React from 'react';

class NewParticipant extends React.Component {
  render() {
    return (
        <div className="card border-dark mb-3">
         <input 
              type="text" 
              class="form-control" 
              placeholder="Type here" 
              ></input>
        </div>
    );
  }
}
export default NewParticipant;