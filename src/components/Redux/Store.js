// import { createStore } from 'redux'
import { createStore } from 'redux'
import { countReducer } from './CounterReducer'

export const store= createStore(countReducer)