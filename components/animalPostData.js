var React = require('react');

//required modules are "children "
var AnimalPostForm = require('./animalPostForm.js');

/*React.createClass({
  getInitialState() {
    inputValue: ''
  },

  render() {
    return (
      <input
        type='text'
        value={this.state.inputValue}
        onChange={this.onChange} />
    );
  },

  onChange(e) {
    this.setState({ inputValue: e.target.value });
  }
});*/


var AnimalPostData = React.createClass({
	getInitialState: function() {
		return {
			name: null,
			species: null,
			age: null
		}
	},
	handleNameChange: function(event){
		this.setState({ name: event.target.value})
	},
	handleSpeciesChange: function(event){
		this.setState({ species: event.target.value })
	},
	handleAgeChange: function(event){
		this.setState({ age: event.target.value })
	},
	handleAnimalSubmit: function(event){
		event.preventDefault();

		var animal = {};
		animal.name = this.state.name;
		animal.species = this.state.species;
		animal.age = this.state.age;

		this.handleNewAnimalPost(animal);
		this.setState({ name: '', species: '', age: ''});
	},

	handleNewAnimalPost: function(animal){ //animal object from above function
		$.ajax({
			url: '/animals',
			method: 'POST',
			dataType: 'json',
			data: animal,
			success: function(data){
				this.props.toggleActiveComponent('allAnimals');
			}.bind(this), 
			error: function(xhr, status, err){
				console.error('/animals', status, err.toString());
			}.bind(this)
		});
	},

	render: function() {
		return (
			<div>
				<h1>Add an animal</h1>
				<AnimalPostForm 
				handleAnimalSubmit = { this.handleAnimalSubmit }
				handleNameChange = { this.handleNameChange }
				handleSpeciesChange = { this.handleSpeciesChange }
				handleAgeChange ={ this.handleAgeChange }
				/>
			</div>
		)
	}
});

module.exports = AnimalPostData;







