import axios from 'axios'

const APPS = 'APPS'
const ADD_APP = 'ADD_APP'
const UPDATE_APP = 'UPDATE_APP'
const DELETE_APP = 'DELETE_APP'

export const getApps = () => {
  axios.get('api/app')
}

export const addApp = (app) => {

}

export const updateApp = (app) => {

}

export const deleteApp = (id) => {

}

export default (state = [], action) {
  switch(action.type) {
    case APPS:
      return action.apps
    case ADD_APP:
      return [action.app, ...state]
    case UPDATE_APP:
      return state.map(a => {
        if ( a.id === action.app.id)
          return action.app
        return a
      })
    case DELETE_APP:
      return state.filter( a => a.id !== action.id )
    default:
      return state
  }
}