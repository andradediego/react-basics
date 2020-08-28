import React from 'react'
import './Person.css'

const person = (props) => {
	return (
		<div className="Person">
			<h4 onClick={props.click}>I'm a {props.name} and I am {props.age} years old</h4>
			<h5>{props.children}</h5>
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	)
};

export default person;