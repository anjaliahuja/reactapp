var Header = React.createClass({
	render: function(){
		return(
			<h1 className="title">(this.props.text}</h1>
				);
	}
});

var SearchBar = React.createClass({
	render: function(){
		return(
			<input type="search" />
			);
	}
});

var EmployeeList = React.createClass({
	render: function(){
		return(
			<ul>
				<li>Christopher </li>
				<li>Lisa Jones</li>
			</ul>
			);
	}
});

var HomePage = React.createClass({
	render: function(){
		return(
			<div>	
				<Header text="Employee Directory"/>
				<SearchBar />
				<Employee List />
				</div>
			);
	}
});

React.render(
	<HomePage />
	document.body
	);