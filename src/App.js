import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: 'Diego',
        age: 35
      },
      {
        id: 2,
        name: 'Josy',
        age: 36
      },
      {
        id: 3,
        name: 'Dave',
        age: 30
      }
    ],
    hobbie: 'My hobbie is baseball',
    showPersons: false
  }

  nameChangeHandler = (event, personId) => {
    // DO NOT DO THIS
    // this.state.persons[0].name = 'Jane';
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === personId
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons]

    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (              
                <Person 
                  click={() => this.deletePersonHandler(index)}                  
                  name={person.name} 
                  age={person.age}
                  key={person.id}
                  changed={ (event) => this.nameChangeHandler(event, person.id)}
                  >                    
                </Person>              
              )
            })
          }
          
        </div> 
      );
    }

    return (
      <div>        
        <div className="container">
        <div className="row">
            <button
              style={style} 
              onClick={this.togglePersonsHandler}>
                Toggle Persons
            </button>
          </div>
          <div className="row">
            <div className="col-md-12">
              {persons}
            </div>
          </div>                  
        </div>
      </div>
    );
  }
}

export default App;
