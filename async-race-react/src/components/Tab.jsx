import React, {useContext} from 'react';
import { Context } from '../Context';

const Tab = () => {
	const {winners} = useContext(Context);
	return (
		<div>
			<div className="tab">
				<div className="tab-header">
					<div className="tab-header-numer">Number</div>
					<div className="tab-header-car">Car</div>
					<div className="tab-header-name">Name</div>
					<div className="tab-header-wins">Wins</div>
					<div className="tab-header-time">Best Time (s)</div>
				</div>
				<div className="tab-winners">
			  	{winners.map(wins =>
             <div className='tab-winner' key={wins.id}>{`winners  = id: ${wins.wins} wins: ${wins.id} time : ${wins.time}`}</div>
           )}
				</div>
			</div>
		</div>
	);
};
export default Tab;
