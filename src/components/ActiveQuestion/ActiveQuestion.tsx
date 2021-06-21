import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import QuestionsState from '../QuestionsState/QuestionsState';
import './ActiveQuestion.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import { nextQuestion, prevQuestion, setAnswer } from '../../redux/actions/questionsActions';
import { finishGame } from './../../redux/actions/startActions';
import { isFinished } from './validator';

const ActiveQuestion: React.FC = () => {
	const dispatch = useDispatch();
	const { questions, currentQuestionIndex } = useSelector((state: RootState) => state.questionsReducer);

	const [answer, setInputAnswer] = useState<string>(questions[currentQuestionIndex]?.answer);

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(setAnswer(answer));
	};

	return (
		<div>
			<QuestionsState />
			<Container className='active-cont'>
				<Form onSubmit={e => submitHandler(e)}>
					<Form.Group className='active-form-gr'>
						<Form.Label className='active-form-label'>
							{currentQuestionIndex + 1}.
							{questions[currentQuestionIndex]?.question}
						</Form.Label>
						<Form.Control
							size='lg'
							type='text'
							placeholder="Answer (Don't forget to press Enter)"
							value={answer}
							className='active-form-control'
							onChange={e => setInputAnswer(e.target.value)}
						/>
					</Form.Group>
				</Form>
			</Container>
			<div className='active-buttons'>
				<Button
					variant='primary'
					disabled={currentQuestionIndex === 0 ? true : false}
					onClick={() => {
						dispatch(prevQuestion());
						setInputAnswer(questions[currentQuestionIndex - 1]?.answer);
					}}>
					Previous
				</Button>
				<Button
					variant='primary'
					disabled={currentQuestionIndex === 3 ? true : false}
					onClick={() => {
						dispatch(nextQuestion());
						setInputAnswer(questions[currentQuestionIndex + 1]?.answer);
					}}>
					Next
				</Button>
				<Button
					variant='success'
					disabled={isFinished(
						questions[0].answer,
						questions[1].answer,
						questions[2].answer,
						questions[3].answer,
						currentQuestionIndex,
					)}
					onClick={() => {
						dispatch(finishGame());
					}}>
					Finish!
				</Button>
			</div>
		</div>
	);
};

export default ActiveQuestion;
