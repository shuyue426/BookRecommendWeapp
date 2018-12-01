import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import topic from './reducers/topic'

const reducer =  combineReducers({
  topic
})

const middlewares = [
  thunkMiddleware
]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(require('redux-logger').createLogger())
}

export default function configStore () {
  const store = createStore(reducer, applyMiddleware(...middlewares))
  return store
}
