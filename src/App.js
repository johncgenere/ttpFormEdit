import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
      super(props);

      this.state = {
        firstName: 'John',
        lastName: 'Smith',
        newFirst: '',
        newLast: '',
        edit: false
      }

      this.handleEdit = this.handleEdit.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
      this.handleSave = this.handleSave.bind(this);
      this.handleFirstNameInput = this.handleFirstNameInput.bind(this);
      this.handleLastNameInput = this.handleLastNameInput.bind(this);
  }

  handleEdit = (event) => {
    let edit = true;
    this.setState({edit});
    console.log('something');
  }

  handleCancel = (event) => {
    let edit = false;
    let newFirst = '';
    let newLast = '';
    this.setState({edit, newFirst, newLast});
  }

  handleSave = (event) => {
    this.setState({
      firstName: this.state.newFirst,
      lastName: this.state.newLast,
      edit: false
    });
  }

  handleFirstNameInput = (e) => {
    this.setState({newFirst: e.target.value});
  }

  handleLastNameInput = (e) => {
    this.setState({newLast: e.target.value});
  }


  render(){
    if(!this.state.edit){
      return (
        <div className="App">
          <header className="App-header">
          <form className="ui large form">
            <div className="ui stacked segment">
              <h2> First Name: {this.state.firstName} </h2>
              <h2> Last Name: {this.state.lastName} </h2>
            </div>
            <div className="ui fluid large blue submit button" onClick={this.handleEdit}>Edit</div>
          </form>
          </header>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
          <form className="ui large form" onKeyPress={this.onKeyPress}>
            <div className="ui stacked segment">
              <div className="field">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={this.handleFirstNameInput}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={this.handleLastNameInput}
                />
              </div>
              <div className="ui fluid large green submit button" onClick={this.handleSave}>Save</div>
              <div className="ui fluid large red submit button" onClick={this.handleCancel} style={{marginTop: '3%'}}>Cancel</div>
            </div>
          </form>
          </header>
        </div>
      );
    }
  }
}

export default App;
