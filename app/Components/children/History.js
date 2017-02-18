// Include React
var React = require("react");

var History = React.createClass({
	getInitialSate: function() {
		return { dateTime: };
	},

	render: function() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Search History</h3>
				</div>
				<div className="panel-body text-center">
					<p>Search History Shows Here</p>
					<span>
						<p>{this.props.searchTerm}</p>
						{/*<p>{this.state.dateTime}</p>*/}
					</span>
				</div>
			</div>
		);
	}
});

module.exports = History;