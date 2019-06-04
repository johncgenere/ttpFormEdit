import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
      super(props);

      this.state = {
        firstName: 'John',
        lastName: 'Smith'
      }
  }



  render(){
    return (
      <div className="App">
        <header className="App-header">
        <form className="ui large form">
          <div className="ui stacked segment">
            <h2 style={{color: 'black'}}> First Name: {this.state.firstName} </h2>
            <h2 style={{color: 'black'}}> Last Name: {this.state.lastName} </h2>
          </div>
          <div className="ui fluid large black submit button" onClick={this.handleEdit}>Edit</div>
        </form>
        </header>
      </div>
    );
  }
}

export default App;
