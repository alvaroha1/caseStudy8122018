import React from 'react';

class AddParticipant extends React.Component {
  constructor () {
    super();
    this.state = {
        name: '',
    };
  }

  createParticipant = (event) => {
    event.preventDefault(); 
    this.props.addParticipant(this.state);
  }

  onHandle = (e) => {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
        <div className="card border-dark mb-3">
          <div className="card-body text-dark">
          <input 
              type="text" 
              className="form-control" 
              placeholder="Type here"
              onChange={this.onHandle} 
              ></input>
              <button 
                className="btn btn-primary" 
                type="button" 
                id="button-addon2"
                onClick={this.createParticipant}>Add Participant</button>
            </div>
            </div>
    );
  }
}
export default AddParticipant;