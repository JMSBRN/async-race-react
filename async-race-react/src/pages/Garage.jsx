import React, {useContext} from 'react';
import { Context } from '../Context';

const Garage = () => {

	const {handleCreateCar, handleDeleteCar, cars, winners} = useContext(Context);
	return (
	
	  <div>
          {cars.map(car =>
             <h2 key={car.id}>{`Model- ${car.name}, id car- ${car.id}, color-  ${car.color}`}</h2>
           )}
          {winners.map(wins =>
             <h2 key={wins.id}>{`winners  = id: ${wins.wins} wins: ${wins.id} time : ${wins.time}`}</h2>
           )}
           <button onClick={handleCreateCar}>Create</button>
           <button onClick={handleDeleteCar}>Delete</button>
       </div>
	);
};

export default Garage;
