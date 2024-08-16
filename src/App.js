import { CarsContext, CarsDispatchContext } from './context/cars-context';
import { carsReducer } from './reducer';

import React, { useReducer } from 'react';
import './App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './Components/NavBar/NavBar';
import carros from "./Components/CarDetail/CarDetail";




function App() {

  const [cars, dispatch] = useReducer( // O useReducer é um hook do React que nos permite criar um estado que é gerenciado por um reducer. O reducer é uma função que recebe o estado atual e uma ação e retorna um novo estado.
    carsReducer, // O reducer que criamos
    carros // O estado inicial que criamos
  );

  return (
    <CarsContext.Provider value={cars}> {/* Aqui colocamos o Context criado em volta de toda a parte da aplicação que precisa ter acesso à lista de carros */}
      <CarsDispatchContext.Provider value={dispatch}> {/* O dispatch é uma função que chamamos para quando uma ação na lista de carros precisar ser executada (adicionar, editar, remover e etc) */}
        <div>
          <Navbar/>
          <home/>
          <Outlet />
        </div>
      </CarsDispatchContext.Provider>
    </CarsContext.Provider>
  );
}

export default App;
