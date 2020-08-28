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

  switchNameHandler = (newName) => {
    // DO NOT DO THIS
    // this.state.persons[0].name = 'Jane';
    this.setState({
      persons: [
        {
          name: newName,
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


  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {
          name: 'Andrade',
          age: 35
        },
        {
          name: 'Josy',
          age: 25
        },
        {
          name: event.target.value,
          age: 30
        }
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div>        
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Person name={this.state.persons[0].name} 
               age={this.state.persons[0].age}/>
            </div>
            <div className="col-md-4">
              <Person name={this.state.persons[1].name} 
                click={this.switchNameHandler.bind(this, 'Josiane')}
                changed={this.nameChangeHandler}
                age={this.state.persons[1].age}/>
            </div>
            <div className="col-md-4">
              <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>
                {this.state.hobbie}
              </Person>
            </div>
          </div>        
          <div className="row">
            <button
              style={style} 
              onClick={() => this.switchNameHandler('Rogerio')}>
                Switch Name
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
