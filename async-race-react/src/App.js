
import React, { useState, useEffect } from 'react';
import { Context } from './Context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { getCars, getWinners, createCar, deleteCar } from './Api';
import Garage from './pages/Garage';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Winners from '../src/pages/Winners'

function App() {

  const [cars, setCars] = useState([]);
  const [winners, setWinners] = useState([]);

  const car = {
    name: "New_Car",
    color: "#ff0000"
  };

  const handleCreateCar = () => {
    createCar(car).then(() => handleGetCars());
  }
  const handleDeleteCar = () => {
    deleteCar(cars.splice(-1).map(el => el.id)).then(() => handleGetCars());
  }
  const handleGetCars = () => {
    getCars(1, 107).then(resp =>
      setCars(resp.items)
    );
  };
  const handeGetWinners = () => {
    getWinners(1, 7).then(resp =>
      setWinners(resp.items)
    );
  };

  useEffect(() => {
    handleGetCars();
    handeGetWinners();
  }, []);

  return (
    <Router>
      <div className="App">
        <Context.Provider value={{
          handleCreateCar,
          handleDeleteCar,
          cars,
          winners
        }}>
          <Header />
          <Routes>
            <Route path="*" element={<Garage/>}/>
            <Route path="/winners" element={<Winners/>}/>
          </Routes>
          <Footer />
        </Context.Provider>
      </div>
    </Router>
  );
}

export default App;