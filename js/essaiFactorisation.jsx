'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

// var names = require('../liste_des_prenoms_2004_a_2012.json');


var dates = [2004, 2005, 2006, 2007]


// var props = this.props;  permet de d'abbréger l'écriture

//  création d'un composant
var YearList = React.createClass({
  	render: function() {

  		var props = this.props;

	  	return (
	      	<div className ='year-list'> 
	        	<ul>
	        		{/* acolade pour passer du code jsx au js*/
	        			props.years.map(function(year){
	        				return (<li>{year}</li>);
	        			})
					}
	        	</ul>
	    	</div>
    	);
  	}
});

//  "truc-machin"   -> convention d'écriture pour dire que c'est du CSS
// "trucMachin" 
//  création de l'application 

var Application = React.createClass({
	render:function  () {
		return(
			<YearList years={dates}/>)
	}
})
ReactDOM.render(<Application/>,document.getElementById('myReactApp'));