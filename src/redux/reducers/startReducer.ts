import { ActionTypesEnum } from '../actionTypes'

const initialState = {
    started: false,
    finished: false,
}

const startReducer = (state = initialState, action: any) =>
{
    switch (action.type)
    {
        case ActionTypesEnum.START_GAME:
            return {
                ...state,
                started: true,
            }
        case ActionTypesEnum.FINISH_GAME:
            return {
                ...state,
                finished: true,
            }
        case ActionTypesEnum.PLAY_AGAIN:
            return {
                started: false,
                finished: false,
            }
        default:
            return state
    }
}

export default startReducer