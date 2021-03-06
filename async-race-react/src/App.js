
import React, { useState, useEffect } from 'react';
import { Context } from './Context';
import { Routes, Route } from 'react-router-dom'
import { getCars, getWinners, createCar, deleteCar } from './Api';
import Garage from './pages/Garage';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Winners from '../src/pages/Winners'
import Layout from './components/Layout';
import NoPage from './components/NoPage';
import './app.css';

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
      <div className="App">
        <Context.Provider value={{
          handleCreateCar,
          handleDeleteCar,
          cars,
          winners
        }}>
          <Header />
          <Routes>
             <Route path="/async-race-react/" element={<Layout/>}>
               <Route index element={<Garage/>}/>
               <Route path="/async-race-react/winners" element={<Winners/>}/>
               <Route path="*" element={<NoPage/>}/>
             </Route>
          </Routes>
          <Footer />
        </Context.Provider>
      </div>
  );
}
export default App;