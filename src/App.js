import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
      {
        name: 'Diego',
        age: 35
      },
      {
        name: 'Josy',
        age: 36
      },
      {
        name: 'Dave',
        age: 30
      }
    ],
    hobbie: 'My hobbie is baseball'
  }

  switchNameHandler = () => {
    // DO NOT DO THIS
    // this.state.persons[0].name = 'Jane';
    this.setState({
      persons: [
        {
          name: 'Diego Andrade',
          age: 35
        },
        {
          name: 'Josy',
          age: 25
        },
        {
          name: 'Joe',
          age: 30
        }
      ]
    });
  }

  render() {
    return (
      <div>        
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            </div>
            <div className="col-md-4">
              <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
            </div>
            <div className="col-md-4">
              <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>{this.state.hobbie}</Person>
            </div>
          </div>        
          <div className="row">
            <button className='btn btn-default' onClick={this.switchNameHandler}>Switch Name</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
