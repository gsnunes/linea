/**
 *
 * ${name}.js
 *
 */

${name} = Widget.extend({

	/**
	 * init
	 */
	init: function (data) {
		this._super();
		this.data = data;
	},



	/**
	 * onAttach
	 */
	onAttach: function () {
		this._super();
	},



	/**
	 * onDetach
	 */
	onDetach: function () {
		this.removeEventHandlers();
	},



	/**
	 * getTemplateName
	 * Gets the component name.
	 */
	getTemplateName: function () {
		return '${name}';
	}

});