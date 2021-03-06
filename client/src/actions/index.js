import {
  getPostsApi,
  editPostApi,
  addPostApi,
  votePostApi,
  deletePostApi,
  getPostCommentsApi,

  getCategoriesApi,

  addCommentApi,
  editCommentApi,
  voteCommentApi,
  deleteCommentApi,
} from '../utils/api'
import { shouldFetchListItem } from '../utils/shared'

// Posts
// lines 12-54 modified verison of https://redux.js.org/docs/advanced/AsyncActions.html
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

function fetchPosts() {
  return dispatch => {
    return getPostsApi().then(posts => dispatch(receivePosts(posts)))
  }
}

export function fetchPostsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchListItem(getState(), 'posts')) {
      return dispatch(fetchPosts())
    } else {
      return Promise.resolve()
    }
  }
}

export const ADD_POST = 'ADD_POST'
export function addPost({ post }) {
  addPostApi(post)
  return {
    type: ADD_POST,
    post
  }
}

export const DELETE_POST = 'DELETE_POST'
export function deletePost({ postId }) {
  deletePostApi(postId)
  return {
    type: DELETE_POST,
    postId
  }
}

export const EDIT_POST = 'EDIT_POST'
export function editPost({ postId, post }) {
  editPostApi(post)
  return {
    type: EDIT_POST,
    postId,
    post
  }
}

export const UP_VOTE_POST = 'UP_VOTE_POST'
export function upVotePost({ postId }) {
  votePostApi(postId, 'upVote')
  return {
    type: UP_VOTE_POST,
    postId
  }
}

export const DOWN_VOTE_POST = 'DOWN_VOTE_POST'
export function downVotePost({ postId }) {
  votePostApi(postId, 'downVote')
  return {
    type: DOWN_VOTE_POST,
    postId
  }
}

// Categories
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}

function fetchCategories() {
  return dispatch => {
    return getCategoriesApi().then(categories => dispatch(receiveCategories(categories)))
  }
}

export function fetchCategoriesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchListItem(getState(), 'categories')) {
      return dispatch(fetchCategories())
    } else {
      return Promise.resolve()
    }
  }
}

// Comments
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
function receiveComments({ postId, comments }) {
  return {
    type: RECEIVE_COMMENTS,
    postId,
    comments
  }
}

function fetchComments(postId) {
  return dispatch => {
    return getPostCommentsApi(postId).then(comments => dispatch(receiveComments({ postId, comments })))
  }
}

export function fetchCommentsIfNeeded(postId) {
  return (dispatch, getState) => {
    if (shouldFetchListItem(getState().comments, postId)) {
      return dispatch(fetchComments(postId))
    } else {
      return Promise.resolve()
    }
  }
}

export const ADD_COMMENT = 'ADD_COMMENT'
export function addComment({ postId, comment }) {
  addCommentApi(comment)
  return {
    type: ADD_COMMENT,
    postId,
    comment
  }
}

export const DELETE_COMMENT = 'DELETE_COMMENT'
export function deleteComment({ postId, commentId }) {
  deleteCommentApi(commentId)
  return {
    type: DELETE_COMMENT,
    postId,
    commentId
  }
}

export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT'
export function upVoteComment({ postId, commentId }) {
  voteCommentApi(commentId, 'upVote')
  return {
    type: UP_VOTE_COMMENT,
    postId,
    commentId
  }
}

export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMNMENT'
export function downVoteComment({ postId, commentId }) {
  voteCommentApi(commentId, 'downVote')
  return {
    type: DOWN_VOTE_COMMENT,
    postId,
    commentId
  }
}

export const EDIT_COMMENT = 'EDIT_COMMENT'
export function editComment({ postId, comment }) {
  editCommentApi(comment)
  return {
    type: EDIT_COMMENT,
    postId,
    comment
  }
}
