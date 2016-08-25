var React = require('react');

var AnimalCard = React.createClass({
	render: function(){
		return (
			<div>
				<div className ="well col-xs-4">
					<h3>Name: {this.props.name}</h3>
					<h3>Species: {this.props.species}</h3>
					<h3>Age: {this.props.age}</h3>
					<button className="btn btn-success" 
					onClick={this.props.getId.bind(null, "editOneAnimal", this.props.id)} >Edit</button>
					<button className="btn btn-danger" 
					onClick={this.props.deleteAnimal.bind(null, this.props.id)} >DELETE</button>
				</div>
			</div>
		)
	}
});

module.exports =AnimalCard;