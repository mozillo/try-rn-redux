import { 
	GET_LATEST_ACTIVITY, 
	POST_ACTIVITY, 
	POST_COMMENT_ON_ACTIVITY, 
	UPDATE_ACTIVITY_LIST 
} from '../constants/ActionTypes';

import { ListView } from 'react-native';

LANGUAGE_MODELS = [
  'Express',
  'Rails',
  'Symfony',
  'Laravel',
  'CodeIgniter',
  'Sails.js',
  'Koa',
];

module.exports = function(state, action) {

  state = state || 
  { activity: [
      { title: '0. Express', content: 'I love it' },
      { title: '1. Rails', content: 'I love it' },
      { title: '2. Symfony', content: 'I love it' },
    ],
    dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1!==r2 }),
  };

  //state.dataSource = state.dataSource.cloneWithRows(state.activity);
  //state = { ...state, dataSource: state.dataSource.cloneWithRows(state.activity) } ;


  activity = state.activity;
  switch(action.type) {
    case GET_LATEST_ACTIVITY: {
      var sorter = activity.length % 3;
      activity.push({
        title: activity.length+'. '+(LANGUAGE_MODELS[sorter] ? LANGUAGE_MODELS[sorter]:'...'), content: 'I love it'
      })
      return {
        ...state,
        dataSource: state.dataSource.cloneWithRows(activity),
        activity: activity
      }
    }

    case POST_ACTIVITY: {
      activity.pop()
      return {
        ...state,
        dataSource: state.dataSource.cloneWithRows(activity),
        activity: activity
      }
    }


  }

  return {
    ...state,
    dataSource: state.dataSource.cloneWithRows(state.activity)
  };
}
