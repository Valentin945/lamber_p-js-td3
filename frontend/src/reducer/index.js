import { combineReducers } from 'redux'
import act from './act'
import status from './status'


export default combineReducers({
  act,
  status
})