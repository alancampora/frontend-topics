import React from 'react'; 

function PostList({posts}) {
	return (
		<div> 
			{ posts && posts.map(post => 
			<div>
				<div> { post.title } </div>
				<p> { post.body } </p>
			</div>
			)} 
		</div>
	)
} 

export default PostList;
