import { ActionTypesEnum } from '../actionTypes'

const initialState = {
    questions: [
        { id: 0, question: 'Who?', answer: ''},
        { id: 1, question: 'What?', answer: ''},
        { id: 2, question: 'When?', answer: ''},
        { id: 3, question: 'Where?', answer: ''}
    ],
    currentQuestionIndex: 0,
}

const questionsReducer = (state = initialState, action: any) =>
{
    switch (action.type)
    {
        case ActionTypesEnum.NEXT_QUESTION:
            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex + 1,
            }
        case ActionTypesEnum.PREV_QUESTION:
            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex - 1,
            }
        case ActionTypesEnum.SET_ANSWER:
            return {
                ...state,
                questios: state.questions.map(question => (
                    question.id === state.currentQuestionIndex
                        ? question.answer = action.answer
                        : question
                ))
            }
        case ActionTypesEnum.RESET_GAME:
            return {
                questions: [
                    { id: 0, question: 'Who?', answer: ''},
                    { id: 1, question: 'What?', answer: ''},
                    { id: 2, question: 'When?', answer: ''},
                    {id: 3, question: 'Where?', answer: ''}
                ],
                currentQuestionIndex: 0,
            }
        default:
            return state
    }
}

export default questionsReducer