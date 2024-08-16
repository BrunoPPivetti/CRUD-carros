import { useState, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './CarForm.css'
import { CarsContext, CarsDispatchContext } from '../../context/cars-context';
import { Button } from "bootstrap";
function CarForm() {
    const carros = useContext(CarsContext);

    const [umCarro, setUmCarro] = useState('')
    const [umaMarca, setUmaMarca] = useState('')
    const [umaCor, setUmaCor] = useState('')
    const [umAno, setUmAno] = useState('')
    const [listaDeCarros, setListaDeCarros] = useState([...carros])

    const dispatch = useContext(CarsDispatchContext); // "useContext" é importado do React e aqui pegamos o dispatch do contexto para podermos chamar a função de adicionar um novo carro à lista de carros.

    
    function adicionaCarro(){
        const novoCarro = {nome: umCarro, marca:umaMarca, cor: umaCor, ano:umAno}
        
        setListaDeCarros([...listaDeCarros, novoCarro])

        dispatch({ // Aqui chamamos o dispatch para adicionar um novo carro à lista de carros, enviando uma ação do tipo 'add' com os dados do novo carro.
            type: 'add',
            ...novoCarro,
          });
        
    }
    return(
        <div>
            <div className="col">   
                <ul>    
                    Nome:<li><input type='text' value={umCarro} onChange={(e)=> setUmCarro(e.target.value)}>
                    </input></li>
                    Marca:<li><input type='text' value={umaMarca} onChange={(e)=> setUmaMarca(e.target.value)}>
                    </input></li>
                    Cor:<li><input type='text' value={umaCor} onChange={(e)=> setUmaCor(e.target.value)}> 
                    </input></li> 
                    Ano:<li><input type='text' value={umAno} onChange={(e)=> setUmAno(e.target.value)}>
                    </input></li> 
                </ul>     
            </div>
            <div className="auto">
                <button class='btn btn-primary'  onClick={adicionaCarro}>
                    Adicionar Carro
                </button>
            </div>
        </div>
    )
}


export default CarForm
