'use strict';

var React = require('react');
var className = require('classnames');


//  création d'un composant, pret à être exporté
module.exports = React.createClass({


	changeGender : function (sexe) {
		var state = this.state;
		if (state.choixSexe.has(sexe))
			state.choixSexe.delete(sexe);
		else 
			state.choixSexe.add(sexe);

		this.setState({
			choixSexe: state.choixSexe
		})
	},

	getInitialState : function () {
		var sexeSet = new Set ();
		sexeSet.add('M');
		sexeSet.add('F');

		return {
			choixSexe : sexeSet
		};
	}, 
	
  	render: function() {

  		var props = this.props;
  		var self = this;
  		var state = this.state;

  		console.log ('STATE', state.choixSexe)

  		var mclass = className({
  			'selected':state.choixSexe.has('M'),
  			'M':true,
  			'button': true
  		});

		var fclass = className({
  			'selected':state.choixSexe.has('F'),
  			'F':true,
  			'button': true
  		});

  		var  namesByGender = props.names.filter(function(name){
  				return state.choixSexe.has(name.sexe)
  		});

	  	return (
	      	<div className = 'nameList'> 
	      	<ul>
	      		<li className = {fclass} 
	      		onClick={
	      			function(){
	      				self.changeGender ('F');
	      			}
	      		}
	      		> Femme </li>

	      		<li className = {mclass}
	      		onClick = {
	      			function(){
	      				self.changeGender ('M');
	      			}
	      		}
	      		> Homme </li>
   	     	</ul>
	        	<ul>
	        		{
	        		 	namesByGender.map(function(name, index){  /* On associe à chaque li son n° d'index */
	        		 	 	return (<li key = {index}  className = {name.sexe} style ={ 
	        		 	 		{width:name.nombre + 'px'}
	        		 	 		} 		>
	        					{name.prenoms}
	        					{name.nombre}
	        					{name.sexe}
	        				</li>);
	        			})
					}
	        	</ul>
	    	</div>
    	);
  	}
});



// 'use strict';

// var React = require('react');

// //  création d'un composant, pret à être exporté
// module.exports = React.createClass({
//   	render: function() {
//   		return (
//   			<div>Coucou</div>
//   		);
//   	}
//  });