import { applyMiddleware, createStore, combineReducers } from 'redux'
import * as logger from 'redux-logger'
import { createLogger } from 'redux-logger'
import { studentsReducer } from './students'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  students: studentsReducer
})

export type RootState = ReturnType<typeof rootReducer>

export function configureStore() {
  const logMiddleware = createLogger({ collapsed: true })
  const middlewares = [logMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  return createStore(rootReducer, composedEnhancers)
}
