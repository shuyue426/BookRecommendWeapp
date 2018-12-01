import {
    SET_TOPIC
  } from '../const'
  
  export const set_topic = (payload) => {
    return {
      type: SET_TOPIC,
      payload
    }
  }
  