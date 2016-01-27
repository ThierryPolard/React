'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

// var names = require('../liste_des_prenoms_2004_a_2012.json');

var MyComponent = React.createClass({
  	render: function() {
    	return (
	      	<div>
	        	Coucou !
	    	</div>
    	);
  	}
});

ReactDOM.render(
  	<div>
  		<h1>Je suis un titre généré par React</h1>
    	Coucou !
	</div>,
  	document.getElementById('myReactApp')
);



// comment on écrit un composant
<div className='myClass'> // jsx
	<h1>Exemple</h1>
	Je suis un composant div sous React
</div>

React.createElement('div', { // js
		className: 'myClass'
	},
	React.createElement('h1', null, 'Exemple'),
	'Je suis un composant div sous React'
);

/////////////////////////////////////////////


// création composant custom
<MonComposant myProp={this.whatever}> // jsx
	<h1>Exemple</h1>
	Je suis un composant custom sous React
</MonComposant>

React.createElement('MonComposant', { // js
		myProp: this.whatever
	},
	React.createElement('h1', null, 'Exemple'),
	'Je suis un composant custom sous React'
);