var React = require('react');
var AnimalCard = require('./animalCard.js');
//stateless component
function AllAnimals(props){
	var animals = props.animals.map(function(item){
		return <AnimalCard 
			name={item.name} 
			species={item.species} 
			age={item.age}
			key={item._id}
			id={item._id}
			deleteAnimal={props.deleteAnimal}
			getId={props.getId}
			/>
	});
	return (
		<div>
			{animals}
		</div>
		)
};

module.exports =AllAnimals;