import { types } from '../constants/types'

export const setFavorite = payload => ({
    type: types.SET_FAVORITE,
    payload,
})

export const deleteFavorite = payload => ({
    type: types.DELETE_FAVORITE,
    payload,
})

export const loginRequest = payload => ({
    type: types.LOGIN_REQUEST,
    payload,
})

export const logoutRequest = payload => ({
    type: types.LOGOUT_REQUEST,
    payload,
})
