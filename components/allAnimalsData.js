//AnimalApp
//	AllAnimalsData
//		AllAnimals
//			AnimalCard
//	AnimalPostData
//		AnimalPostForm
//	Toggler


var React = require('react');
var AllAnimals =require('./allAnimals.js');


var AllAnimalsData = React.createClass({
	getInitialState: function(){
		return {		
				animals: []				
		}
	},
	deleteAnimal: function(id){
		var self = this;
		$.ajax({
			url: '/animals/' + id,
			method: 'DELETE'
		}).done(function(){
			self.getAllAnimals();
		})
	},
	getAllAnimals: function(){
		var self = this;

		$.ajax({
			method: 'GET',
			url: '/animals'
		}).done(function(data){
			console.log(data);
			self.setState({animals: data})
		})
	},
	componentDidMount: function(){
		this.getAllAnimals();
	},
	render: function(){
		return this.state.animals ? <AllAnimals deleteAnimal={this.deleteAnimal} getId={this.props.getId} animals={this.state.animals}/> : null;
	}
});

module.exports = AllAnimalsData;