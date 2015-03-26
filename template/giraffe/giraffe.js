define(['text!views/${name}.html'], function (html) {

	'use strict';

	return Giraffe.View.extend({

		template: html,

		initialize: function () {
			console.log('${name}.js');
		}

	});

});