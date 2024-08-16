import { createContext } from 'react';

export const CarsContext = createContext(null); // Criamos um contexto para salvar uma lista de carros posteriormente
export const CarsDispatchContext = createContext(null); // Criamos um contexto para salvar o dispatch de uma lista de carros posteriormente