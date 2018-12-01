import React from 'react'; 

function PostList({posts}) {
	return (
		<div> 
			{ posts && posts.map(post => <div> { post.title } </div>)} 
		</div>
	)
} 

export default PostList;
