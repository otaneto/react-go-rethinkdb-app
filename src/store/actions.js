// actionTypes

// Channel Actions

export const ADD_CHANNEL = 'ADD_CHANNEL';
export const SET_CHANNEL = 'SET_CHANNEL';

// User Actions

export const ADD_USER = 'ADD_USER';


// MESSAGE ACTIONS
export const NEW_MESSAGE = 'NEW_MESSAGE';


// actionCreators

export const addChannel = channel => ({
  type: ADD_CHANNEL,
  channel,
});

export const setChannel = channel => ({
  type: SET_CHANNEL,
  channel,
});

export const addUser = user => ({
  type: ADD_USER,
  user,
});

export const newMessage = message => ({
  type: NEW_MESSAGE,
  message,
});
