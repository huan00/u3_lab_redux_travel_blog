import * as types from '../types'
import {
  GetPosts,
  GetComments,
  GetLocations,
  AddReview
} from '../../services/PostService'

export const LoadPosts = () => {
  return async (dispatch) => {
    try {
      const posts = await GetPosts()

      dispatch({
        type: types.GET_POST,
        payload: posts
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadComments = () => {
  return async (dispatch) => {
    try {
      const comments = await GetComments()

      dispatch({
        type: types.GET_COMMENTS,
        payload: comments
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadLocations = () => {
  return async (dispatch) => {
    try {
      const locations = await GetLocations()

      dispatch({
        type: types.GET_LOCATIONS,
        payload: locations
      })
    } catch (error) {
      throw error
    }
  }
}

export const PushReview = (pushData) => {
  return async (dispatch) => {
    try {
      const review = await AddReview(pushData)

      dispatch({
        type: types.ADD_REVIEW,
        payload: review
      })
    } catch (error) {
      throw error
    }
  }
}
