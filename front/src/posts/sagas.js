import 'regenerator-runtime/runtime';
import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects'

export const POSTS_FETCH_SUCCEESS = 'POSTS_FETCH_SUCCEESS';

function* fetchPosts(action) {
   try {

	   const response = yield call(axios.get, 'http://localhost:8080/api/v1/posts');

	   const { posts } = response.data;

	   yield put({
		   type: POSTS_FETCH_SUCCEESS, 
		   payload: {items: posts}
	   });

   } catch (e) {
	   yield put({type: "POSTS_FETCH_FAIL", message: e.message});
   }
}


export function* bootstrap() {
  yield takeLatest('FETCH_POSTS', fetchPosts);
}
