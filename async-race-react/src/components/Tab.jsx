import React, {useContext} from 'react';
import { Context } from '../Context';

const Tab = () => {

	const {winners} = useContext(Context);

	return (
		
		<div>
			  {winners.map(wins =>
             <h2 key={wins.id}>{`winners  = id: ${wins.wins} wins: ${wins.id} time : ${wins.time}`}</h2>
           )}
		</div>
		
		);
};

export default Tab;
