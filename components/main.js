var React = require('react');
var Link = require('react-router').Link;

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<div className="container jumbotron">
					<h2 className="theTitle">Welcome to my Page</h2>
					<p> </p>
					
					
					<Link to='home'>
						<button className="btn btn-success">Home</button>
					</Link>
					<Link to='about'>
						<button className="btn btn-success">About</button>
					</Link>
					<Link to="animals">
						<button className="btn btn-success">Animals</button>
					</Link>	
					{this.props.children}
				</div>	
			</div>
		)
	}
});

module.exports = Main;