import React from 'react';

const Preview = React.createClass({

	render: function() {
		return (
			<div className="blog-post">
				<h2>{this.props.title}</h2>
				<h3>{this.props.author.firstname} {this.props.author.lastname}</h3>
				<p>{this.props.createdAt}</p>
				<p>{this.props.body.substr(0, 200)}</p>

	 		</div> 
		);
	}

});

export default Preview;