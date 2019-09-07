import { types } from '../constants/types'
const reducer = (state, action) => {
    switch (action.type) {
        case types.SET_FAVORITE:
            return { ...state, myList: [...state.myList, action.payload] }
        case types.DELETE_FAVORITE:
            return { ...state, myList: state.myList.filter(item => item.id !== action.payload) }
        default:
            return state
    }
}

export default reducer
