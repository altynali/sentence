import React from 'react';
import { Container } from 'react-bootstrap';
import './QuestionsState.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';

const QuestionsStatus: React.FC = () => {
	const isError = (index: number) => {
		let returnValue;
		questions[index].answer.trim() === ''
			? (returnValue = 'fas fa-times error')
			: (returnValue = 'fas fa-check success');

		return returnValue;
	};

	const { questions } = useSelector((state: RootState) => state.questionsReducer);
	return (
		<Container className='state-container'>
			{questions.map(question => (
				<span key={question.id}>
					{question.id + 1}
					<i className={isError(question.id)}></i>
				</span>
			))}
		</Container>
	);
};

export default QuestionsStatus;
