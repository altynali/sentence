import {ActionTypesEnum} from '../actionTypes'

export const startGame = () =>
{
    return {
        type: ActionTypesEnum.START_GAME
    }
}

export const finishGame = () =>
{
    return {
        type: ActionTypesEnum.FINISH_GAME
    }
}

export const playAgain = () =>
{
    return {
        type: ActionTypesEnum.PLAY_AGAIN
    }
}