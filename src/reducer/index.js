import { act } from "react";

export function carsReducer(listaDeCarros, action) { // O reducer é uma função que recebe o estado atual e uma ação e retorna um novo estado (neste caso, de lista de carros).
  switch (action.type) {
    case 'add': { // Se a ação for do tipo 'add', quer dizer que queremos adicionar um novo carro à lista.
      const newCar = { // Criamos um novo carro com os dados passados na ação (parâmetro action).
        index: action.index,
        nome: action.nome,
        marca: action.marca,
        cor: action.cor,
        ano: action.ano,
      };
  
      return [...listaDeCarros, newCar]; // Retornamos uma nova lista de carros com o novo carro adicionado.
    }
    case 'delete': {
      return listaDeCarros.filter((carro, i) => i !== action.index);
    }
    
    case 'edit': {
      return listaDeCarros.map((carro, i) => 
          i === action.index 
              ? { ...carro, nome: action.nome, marca: action.marca, cor: action.cor, ano: action.ano } 
              : carro
      );
  }
    
    
    default: return null;
  }
}
