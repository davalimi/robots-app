import React, { Component } from 'react';
import './App.css';
// import Card from './components/card/Card';
import { robots } from './robots';
import CardList from './components/cardList/CardList.js';
import SearchBox from './components/searchBox/SearchBox.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			robots: robots,
			searchfield: ''
		};
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
		// console.log(event.target.value);
		// const filteredrobots = this.state.robots.filter((robot) => {
		// 	return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		// });
		// console.log(filteredrobots);
	};

	render() {
		const filteredrobots = this.state.robots.filter((robot) => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});

		return (
			// Etape 1 : on duplique les composants Card
			// <div>
			// 	<Card id={robots[0].id} name={robots[0].name} email={robots[0].email} usrn={robots[0].username} />
			// 	<Card id={robots[1].id} name={robots[1].name} email={robots[1].email} usrn={robots[1].username} />
			// 	<Card id={robots[2].id} name={robots[2].name} email={robots[2].email} usrn={robots[2].username} />
			// </div>

			// Etape2: Créer composant CardList

			// Etape 3 : Créer SearchBox

			// Etape 4 :
			// CardList et SearchBox ont besoin de communiquer entre eux pour savoir quel carte rendre en
			// fonction de l'input. Les freres ne peuvent pas communiquer par contre ils ont un parent en commun.
			// Je créé la props searchChange et la fonction onSearchChange, et je l'envoie vers SearchBox
			//Dans onSearchChange : je fais console.log(event.target.value)
			// J'ai envoyé l'event d'enfant a parent, de searchBox à App, maintenant je peux faire communiquer APP avec CardList avec
			// ces nouvelles informations
			// Dans SearchBox j'ajoute onChange={searchChange} et dans ma methode onSearchChange:		const filteredrobots = this.state.robots.filter((robot) => {
			// 		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			// 	});
			// 	console.log(filteredrobots);
			// };
			// Etape5 :
			// Maintenant je veux envoyer mes robots deja filtrer dans mon composant CardList.
			// au lieu de renvoyer this.state.robots j'envoie filteredrobots
			//Je laisse 		this.setState({ searchfield: event.target.value }) dans onSearchChange
			// et je place filteredrobot dans mon this.render()

			// ******** NPM RUN BUILD **********

			<div className='tc'>
				<h1>RobotsFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<CardList robots={filteredrobots} />
			</div>
		);
	}
}

export default App;
