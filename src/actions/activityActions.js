import { 
  GET_LATEST_ACTIVITY, 
  POST_ACTIVITY, 
  POST_COMMENT_ON_ACTIVITY, 
  UPDATE_ACTIVITY_LIST 
} from '../constants/ActionTypes';

var getLatest = () => {
  return {
    type: GET_LATEST_ACTIVITY
  }
}

var postActivity = () => {
  return {
    type: POST_ACTIVITY
  }
}

var postComment = () => {
  return {
    type: POST_COMMENT_ON_ACTIVITY
  }
}

var refreshList = () => {
  return {
    type: UPDATE_ACTIVITY_LIST
  }
}

module.exports = {
  getLatest,
  postActivity,
  postComment,
  refreshList,
};
