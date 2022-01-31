import React, {useContext} from 'react';
import { Context } from '../Context';

const Garage = () => {

	const {handleCreateCar, handleDeleteCar, cars} = useContext(Context);
	return (
	   
	  <div>
          {cars.map(car =>
             <h2 key={car.id}>{`Model- ${car.name}, id car- ${car.id}, color-  ${car.color}`}</h2>
           )}
        
           <button onClick={handleCreateCar}>Create</button>
           <button onClick={handleDeleteCar}>Delete</button>
       </div>
	);
};

export default Garage;
