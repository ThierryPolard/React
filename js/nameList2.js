'use strict';

var React = require('react');


//  création d'un composant, pret à être exporté
module.exports = React.createClass({
	
  	render: function() {

  		var props = this.props;
  		var self = this;

  		console.log('props', props);

	  	return (
	      	<div className ='nameList'> 
	        	<ul>
	        		{
	        		 	props.names.map(function(name, index){  /* On associe à chaque li son n° d'index */
	        		 	 	return (<li key = {index} >
	        					{name}
	        				</li>);
	        			})
					}
	        	</ul>
	    	</div>
    	);
  	}
});
