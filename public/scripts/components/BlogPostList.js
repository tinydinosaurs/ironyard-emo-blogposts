import React from 'react';
import PostCollection from '../collections/PostCollection';
import Preview from './Preview';

const BlogPostList = React.createClass({
	getInitialState: function() { 
		let blogPosts = new PostCollection();
		return {
			posts: blogPosts
		};
	},
	componentDidMount: function() {
		this.state.posts.on('update', () => {
			this.setState({
				posts: this.state.posts
			});
		});
		this.state.posts.fetch();
		// console.log(this.state.posts);

	},	

	render: function() {
		let previewPost = this.state.posts.map((post, i, arr) => {
			// console.log(post.get('title'));
			return (<Preview 
				key={i}
				title={post.get('title')}
				author={post.get('author')}
				date={post.get('createdAt')}
				body={post.get('body')}
			/>);
		});
		return (
			<div>{previewPost}</div>
			);
	}

});


export default BlogPostList;