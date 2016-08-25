var React = require('react');
var EditAnimalForm = require('./editAnimalForm.js');

var EditAnimalData = React.createClass({
	getInitialState: function(){
		return {
			name: null,
			species: null,
			age: null
		}
	},
	loadOneAnimal: function(){
		var self = this;
		$.ajax({
			url: '/animals/' + self.props.id,
			method: 'GET'
		}).done(function(data){
			self.setState({
				name:  data.name,
				species: data.species,
				age: data.age
			})
		})
	},
	updateAnimal: function(animal){
		$.ajax({
			url: '/animals/' + this.props.id,
			method: 'PUT',
			dataType: 'json',
			data: animal,
			success: function(data){
				this.props.toggleActiveComponent('allAnimals');
			}.bind(this), 
			error: function(xhr, status, err){
				console.error('/animals/' + this.props.id, status, err.toString());
			}.bind(this)
		})
	},
	handleEditAnimalSubmit: function(event){
		event.preventDefault();
		var name = this.state.name;
		var species = this.state.species;
		var age = this.state.age;

		this.updateAnimal({name : name, species: species, age: age });
	},
	onNameChange: function(event){
		this.setState({ name: event.target.value });
	},
	onSpeciesChange: function(event){
		this.setState({ species: event.target.value });
	},
	onAgeChange: function(event){
		this.setState({ age: event.target.value });
	},
	componentDidMount: function(){
		this.loadOneAnimal();
	},
	render: function(){
		return (
			<div>
				<EditAnimalForm name={this.state.name} 
				species={this.state.species} age={this.state.age} 
				handleEditAnimalSubmit={this.handleEditAnimalSubmit}
				onNameChange={this.onNameChange}
				onSpeciesChange={this.onSpeciesChange}
				onAgeChange={this.onAgeChange} />
			</div>
		)
	}
});

module.exports = EditAnimalData;