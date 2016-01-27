'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var YearList= require('./YearList.js'); /* appelle la fonction dans le fichier YearList*/
var NameList= require('./nameList.js'); /* appelle la fonction dans le fichier nameList*/

var names = require('../liste_des_prenoms_2004_a_2012.json');

var dateSet = new Set ();

var cleanedNames = names.map(function(name){
	var annee= parseInt(name.fields.annee);
	dateSet.add(annee);
	name.fields.annee=annee;
	return name.fields;
});


var dates = [];

dateSet.forEach (function (date) {
	dates.push(date);
});

dates.sort(); /* trie la liste 'dates' dans l'ordre croissant*/

var Application = React.createClass({

	changeAnnee: function(annee){ /* les fonctions sont définies, mais pas encore appellées*/
		this.setState({
			choixAnnee: annee
		});
	},


	getInitialState:function(){ /* initialisation. Pas indispensable, mais bonne pratique*/
		return {
			choixAnnee : 2005
		};
	},

	render: function  () {
		var props = this.props;
		var state = this.state;

		var filteredNames = props.names.filter (function(name){
			return	name.annee=== state.choixAnnee;
		});

		return (
		<div>
			<YearList 
				years = {props.dates} 
				onChangeDate = {this.changeAnnee}   
				choixAnnee   = {this.state.choixAnnee}/>
			<NameList
				names = {filteredNames}/>
		</div>
		);
	}
});

ReactDOM.render(<Application dates ={dates} names ={cleanedNames}/>, document.getElementById('myReactApp')); /* c'est ici que les fonctions sont appliquées, ici la fonciton render, puis indique l'endrouit ou elle sont envoyée*/




// var Test = React.createClass({
// 	render: function (){
// 		return(
// 		<div>
// 			{"j'ai choisi l'annee " +  this.props.choixAnnee}	

// 		</div>
// 		)
// 	}
// });

// var props = this.props;  permet de d'abbréger l'écriture

//  "truc-machin"   -> convention d'écriture pour dire que c'est du CSS
// "trucMachin" 
//  création de l'application 
