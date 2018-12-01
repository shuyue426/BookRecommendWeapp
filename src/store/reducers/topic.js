import { SET_TOPIC } from '../const';

const INITIAL_STATE = {
  topic: ""
}

export default function topic (state = INITIAL_STATE, action) {
  const { type,payload } = action;
  switch (type) {
    case SET_TOPIC:
      state.topic = payload
      return {...state}
     default:
       return state
  }
}
