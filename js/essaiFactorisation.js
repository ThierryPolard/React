'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

// var names = require('../liste_des_prenoms_2004_a_2012.json');

var dates = [2004, 2005, 2006, 2007];

// var props = this.props;  permet de d'abbréger l'écriture

//  création d'un composant
var YearList = React.createClass({
		displayName: 'YearList',

		render: function () {

				var props = this.props;

				return React.createElement(
						'div',
						{ className: 'year-list' },
						React.createElement(
								'ul',
								null,
								 /* acolade pour passer du code jsx au js*/
								props.years.map(function (year) {
										return React.createElement(
												'li',
												null,
												year
										);
								})
						)
				);
		}
});

//  "truc-machin"   -> convention d'écriture pour dire que c'est du CSS
// "trucMachin"
//  création de l'application

var Application = React.createClass({
		displayName: 'Application',

		render: function () {
				return React.createElement(YearList, { years: dates });
		}
});
ReactDOM.render(React.createElement(Application, null), document.getElementById('myReactApp'));