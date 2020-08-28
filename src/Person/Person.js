import React from 'react'
import Radium from 'radium';
import './Person.css'

const person = (props) => {
	const style = {
		'@media (min-width: 500px)': {
			width: '450px'
		}
	}
	return (
		<div className="Person" style={style}>
			<h4 onClick={props.click}>I'm a {props.name} and I am {props.age} years old</h4>
			<h5>{props.children}</h5>
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	)
};

export default Radium(person);