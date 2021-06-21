import React from 'react';
import { Button } from 'react-bootstrap';
import { startGame } from '../../redux/actions/startActions';
import { useDispatch } from 'react-redux';
import './Start.css';

const Start: React.FC = () => {
	const dispatch = useDispatch();
	return (
		<div className='start'>
			<div>
				<div className='start-title'>
					<span>
						<h1 className='start-sub'>Hi! </h1>{' '}
						<i className='fas fa-smile-wink'></i>
					</span>
					<h1 className='start-sub'> I'll help you build a sentence!</h1>
					<h1 className='start-warning'>*Press Enter to save your answer.*</h1>
				</div>
				<Button
					variant='success'
					onClick={() => dispatch(startGame())}
					className='start-btn'>
					Let's start!
				</Button>
			</div>
		</div>
	);
};

export default Start;
