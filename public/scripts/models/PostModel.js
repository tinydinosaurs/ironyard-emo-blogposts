import Backbone from 'backbone';

export default Backbone.Model.extend({
	default: {
		id: '',
		title: '',
		body: '',
		author: '',
		createdAt: '',
		updatedAt: ''
	},

	urlRoot: 'http://localhost:3000/api/v1/post',
	idAttribute: 'id'
});