import { types } from '../constants/types'
import _ from 'lodash'
const reducer = (state, action) => {
    switch (action.type) {
        case types.SET_FAVORITE:
            return { ...state, myList: [...state.myList, action.payload] }
        case types.DELETE_FAVORITE:
            return {
                ...state,
                myList: _.filter(
                    state.myList,
                    item => item.id !== action.payload
                ),
            }
        case types.LOGIN_REQUEST:
            return { ...state, user: action.payload }
        case types.LOGOUT_REQUEST:
            return { ...state, user: action.payload }
        case types.REGISTER_REQUEST:
            return { ...state, user: action.payload }
        case types.GET_VIDEO_SOURCE:
            return {
                ...state,
                playing:
                    state.trends.find(
                        item => item.id === Number(action.payload)
                    ) ||
                    state.originals.find(
                        item => item.id === Number(action.payload)
                    ) ||
                    {},
            }
        case types.SEARCH_VIDEO:
            if (action.payload === '') {
                return {
                    ...state,
                    searchResults: [],
                }
            } else {
                return {
                    ...state,
                    searchResults:
                        _.filter(state.trends, item =>
                            item.title
                                .toLowerCase()
                                .includes(action.payload.toLowerCase())
                        ) ||
                        _.filter(state.originals, item =>
                            item.title
                                .toLowerCase()
                                .includes(action.payload.toLowerCase())
                        ) ||
                        [],
                }
            }

        default:
            return state
    }
}

export default reducer
