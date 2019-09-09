import { types } from '../constants/types'
const reducer = (state, action) => {
    switch (action.type) {
        case types.SET_FAVORITE:
            return { ...state, myList: [...state.myList, action.payload] }
        case types.DELETE_FAVORITE:
            return {
                ...state,
                myList: state.myList.filter(item => item.id !== action.payload),
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
                    [],
            }

        default:
            return state
    }
}

export default reducer
