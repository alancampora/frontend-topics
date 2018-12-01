import React from 'react';
import PostList from './presentational.jsx';
import { fetchPosts } from '../../actions';
import { connect } from 'react-redux';

export const mapStateToProps = ({posts}) => ({
	posts: posts.items, 
});

export const mapDispatchToProps  = (dispatch) => ({
	bootstrap: () => console.log(fetchPosts) || dispatch(fetchPosts), 
});

class PostListWrapper extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.bootstrap();
	}
	render(){
		return(<PostList {...this.props} />);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListWrapper);
