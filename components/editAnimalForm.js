//AnimalApp
//	AllAnimalsData
//		AllAnimals
//			AnimalCard
//	AnimalPostData
//		AnimalPostForm
//	EditAnimalData
//		EditAnimalForm
//	Toggler

var React = require('react');
var EditAnimalForm = React.createClass({
	render: function(){
		return (
			<div>
				<div className='container'>

					<form className='form-inline' onSubmit= {this.props.handleEditAnimalSubmit}>
						<div className='form-group'>
							<label> Name </label>
							<input type='text' className='form-control' placeholder='Name' 
							onChange={this.props.onNameChange} value={this.props.name}/>
						</div>
						<div className='form-group'>
							<label> Species </label>
							<input type='text' className='form-control' placeholder='Species' 
							onChange={this.props.onSpeciesChange} value={this.props.species}/>
						</div>
						<div className='form-group'>
							<label> Age </label>
							<input type='text' className='form-control' placeholder='Age' 
							onChange={this.props.onAgeChange} value={this.props.age}/>
							<button type='submit'className= 'btn btn-primary'>EDIT ANIMAL</button>
						</div>
					</form>
				
				</div>
			</div>
		)
	}
});

module.exports = EditAnimalForm;