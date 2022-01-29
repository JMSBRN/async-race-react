
import React, {useState, useEffect} from 'react';
import {getCars, getWinners, createCar, deleteCar} from './Api';

function App() {

const [cars, setCars] = useState([]);
const [winners, setWinners] = useState([]);

const car = {
  name: "New_Car",
  color: "#ff0000"
};

 const handleCreateCar =() => {
  createCar(car).then(() => handleGetCars());
 }
 const  handleDeleteCar = () =>  {
  deleteCar(cars.splice(-1).map(el=> el.id)).then(() => handleGetCars());
 }
 const handleGetCars = () => {
  getCars(1,107).then(resp=>  
    setCars(resp.items)
   );
 };
 const handeGetWinners = () => {
  getWinners(1, 7).then(resp=>  
    setWinners(resp.items)
   );
 };

 useEffect(() => {
  handleGetCars();
  handeGetWinners();
 }, []);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;