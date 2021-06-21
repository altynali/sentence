import React from 'react';

interface IProps {
	id: number;
	classes: string;
}

const ActiveQuestionState: React.FC<IProps> = (id, classes) => {
	return (
		<span>
			{id}
			<i className={classes}></i>
		</span>
	);
};

export default ActiveQuestionState;
