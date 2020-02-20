import React from 'react';
import Card from '../card/Card.js';

//Ici CardList est une fonction pure, car il reçoit robots et renvoit robots sans aucune modification
const CardList = ({ robots }) => {
	const cardArray = robots.map((robot) => {
		return <Card key={robot.id} id={robot.id} name={robot.name} username={robot.username} email={robot.email} />;
	});
	return <div>{cardArray}</div>;
};

export default CardList;
