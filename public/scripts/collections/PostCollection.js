import Backbone from 'backbone';
import PostModel from '../models/PostModel';

export default Backbone.Collection.extend({
	model: PostModel,
	url: 'http://localhost:3000/api/v1/post'
});