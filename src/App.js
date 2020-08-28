import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';


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
    let style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (        
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
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    } 
    
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div>        
          <div className="container">
            <div className="row text-center mt-10">
              <h1>Hi, I'm a React App</h1>
              <p className={classes.join(' ')}>this is really working</p>
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
      </StyleRoot>
    );
  }
}

export default Radium(App);
