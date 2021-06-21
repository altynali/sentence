import React from 'react';
import './App.css';
import ActiveQuestion from './components/ActiveQuestion/ActiveQuestion';
import Start from './components/Start/Start';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { RootState } from './redux/reducers/rootReducer';
import Finished from './components/Finished/Finished';

const App: React.FC = () => {
	const { started, finished } = useSelector((state: RootState) => state.startReducer);

	return (
		<div className='app'>
			{!started && !finished ? <Start /> : null}
			{started && !finished ? <ActiveQuestion /> : null}
			{finished ? <Finished /> : null}
		</div>
	);
};

export default App;
