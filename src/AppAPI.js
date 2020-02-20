import React, { Component } from 'react';
import { robots } from './robots';
import CardList from './components/cardList/CardList.js';
import SearchBox from './components/searchBox/SearchBox.js';
import Scroll from './Scroll';
// https://jsonplaceholder.typicode.com/users

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			robots: [],
			searchfield: ''
		};
	}

	//Je fetch mes users depuis mon API
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				return response.json();
			})
			.then((users) => {
				this.setState({ robots: users });
			});
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	};

	render() {
		// const {robots, searchfield} = this.state;
		const filteredrobots = this.state.robots.filter((robot) => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		// if (!this.state.robots.length)

		if (this.state.robots.lenght === 0) {
			return <h1>Loading</h1>;
		} else {
			return (
				<div className='tc'>
					<h1 className='title'>RobotsFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList robots={filteredrobots} />
					</Scroll>
				</div>
			);
		}
	}
}

export default App;
