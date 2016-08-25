var React = require('react');

var AnimalPostForm = React.createClass ({
	render: function(){
		return (
			<div>
				<div className='container'>

					<form className='form-inline' onSubmit= {this.props.handleAnimalSubmit}>
						<div className='form-group'>
							<label> Name </label>
							<input type='text' className='form-control' placeholder='Name' 
							onChange={this.props.handleNameChange} value={this.props.name}/>
						</div>
						<div className='form-group'>
							<label> Species </label>
							<input type='text' className='form-control' placeholder='Species' 
							onChange={this.props.handleSpeciesChange} value={this.props.species}/>
						</div>
						<div className='form-group'>
							<label> Age </label>
							<input type='text' className='form-control' placeholder='Age' 
							onChange={this.props.handleAgeChange} value={this.props.age}/>
							<button type='submit'className= 'btn btn-primary'>ADD ANIMAL</button>
						</div>
					</form>
				
				</div>
			</div>
		)
	}
});

module.exports = AnimalPostForm;

