'use strict';

var React = require('react');

// var names = require('../liste_des_prenoms_2004_a_2012.json');

//  création d'un composant, pret à être exporté
module.exports = React.createClass({
		displayName: 'exports',

		render: function () {

				var props = this.props;
				var self = this;

				console.log('props', props);

				return React.createElement(
						'div',
						{ className: 'year-list' },
						React.createElement(
								'ul',
								null,
								props.years.map(function (year, index) {
										/* On associe à chaque li son n° d'index */
										var isSelected = props.choixAnnee === year;
										return React.createElement(
												'li',
												{ key: index,
														className: isSelected ? 'selected' : '',
														onClick: function () {
																props.onChangeDate(year);
														}
												},
												year
										);
								})
						)
				);
		}
});