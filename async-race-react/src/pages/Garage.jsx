import React, {useContext} from 'react';
import Input from '../components/Input';
import PageCountTitle from '../components/PageCountTitle';
import { Context } from '../Context';
import '../pages/garage.css'

const Garage = () => {
	const {handleCreateCar, handleDeleteCar, cars} = useContext(Context);
	return (
	  <div>
      <Input/>
      <h2 className='title-page'>Garage</h2>
      <PageCountTitle/>
      {cars.map(car =>
          <div className='car' key={car.id}>{`Model- ${car.name}, id car- ${car.id}, color-  ${car.color}`}</div>
        )}
        <button className='create-btn' onClick={handleCreateCar}>Create</button>
        <button className='delete-btn' onClick={handleDeleteCar}>Delete</button>
    </div>
	);
};
export default Garage;
