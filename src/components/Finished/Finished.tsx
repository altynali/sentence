import { Button } from 'react-bootstrap';
import { playAgain } from '../../redux/actions/startActions';
import { useDispatch, useSelector } from 'react-redux';
import './Finished.css';
import { RootState } from '../../redux/reducers/rootReducer';
import { resetGame } from '../../redux/actions/questionsActions';

const Finished = () => {
	const dispatch = useDispatch();
	const { questions } = useSelector((state: RootState) => state.questionsReducer);
	return (
		<div className='finished'>
			<h2>SENTENCE IS READY:</h2>
			<p>
				<h3>
					{questions.map(question => (
						<span>{question.answer} </span>
					))}
				</h3>
			</p>
			<Button
				onClick={() => {
					dispatch(playAgain());
					dispatch(resetGame());
				}}>
				Play again
			</Button>
		</div>
	);
};

export default Finished;
