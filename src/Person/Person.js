import React from 'react'

const person = (props) => {
	return (
		<div>
			<h4>I'm a {props.name} and I am {props.age} years old</h4>
			<h5>{props.children}</h5>
		</div>
	)
};

export default person;