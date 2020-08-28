import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Person from './Person/Person'


const App = props => {
  const [ personsState, setPersonsSate ] = useState({
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
  });

  const switchNameHandler = () => {
    // DO NOT DO THIS
    // this.state.persons[0].name = 'Jane';
    setPersonsSate({...personsState,
      persons: [
        {
          name: 'Diego Andrade',
          age: 35
        },
        {
          name: 'Josy',
          age: 22
        },
        {
          name: 'Joe',
          age: 30
        }
      ]
    });
  }
  
  return (
    <div>        
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
          </div>
          <div className="col-md-4">
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
          </div>
          <div className="col-md-4">
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>{personsState.hobbie}</Person>
          </div>
        </div> 
        <hr/>       
        <div className="row">
          <button className='btn btn-default' onClick={switchNameHandler}>Switch Name</button>
        </div>
      </div>
    </div>
  );
  
}

export default App;






