import { useState, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './CarList.css'
import { CarsContext, CarsDispatchContext } from '../../context/cars-context';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";
import { Button } from "bootstrap";

function CarList(){
    const listaDeCarros = useContext(CarsContext); // "useContext" é importado do React e aqui pegamos a lista de carros do contexto para podermos exibir na tela.
    const dispatch = useContext(CarsDispatchContext)
    
    const [editando, setEditando] = useState(null); // Estado para armazenar o índice do carro que está sendo editado
    const [carroEditado, setCarroEditado] = useState({
        nome: '',
        marca: '',
        cor: '',
        ano: ''
    });

    function handleEdit(index) {
        dispatch({
            type: 'edit',
            index: index,
            ...carroEditado // Passa os novos dados do carro editado
        });
        setEditando(null); // Reseta o estado de edição após a edição ser concluída
    }

    function iniciarEdicao(carro, index) {
        setEditando(index); // Define o índice do carro atual como sendo editado
        setCarroEditado(carro); // Preenche o estado com os dados do carro
    }

    function excluiCarro(index){
        dispatch({
            type:'delete',
            index: index
        })
    };

    return (
        <div className="container">
            <h2>Lista de Carros</h2>
            {listaDeCarros.map((carro, index) => (
                <div key={index} className="col mycar">
                    {editando === index ? ( // Exibe o formulário de edição apenas para o carro selecionado
                        <div>
                            <input
                                type="text"
                                value={carroEditado.nome}
                                onChange={(e) => setCarroEditado({ ...carroEditado, nome: e.target.value })}
                            />
                            <input
                                type="text"
                                value={carroEditado.marca}
                                onChange={(e) => setCarroEditado({ ...carroEditado, marca: e.target.value })}
                            />
                            <input
                                type="text"
                                value={carroEditado.cor}
                                onChange={(e) => setCarroEditado({ ...carroEditado, cor: e.target.value })}
                            />
                            <input
                                type="text"
                                value={carroEditado.ano}
                                onChange={(e) => setCarroEditado({ ...carroEditado, ano: e.target.value })}
                            />
                            <button class='btn btn-primary' onClick={() => handleEdit(index)}>Salvar</button>
                            <button class='btn btn-primary' onClick={() => setEditando(null)}>Cancelar</button>
                        </div>
                    ) : (
                        <div>
                            <span>{carro.nome} - {carro.marca} - {carro.cor} - {carro.ano}</span>
                            <div className="icon">
                                <FontAwesomeIcon className='icon-edit' icon={ faPen } onClick={() => iniciarEdicao(carro, index)}>Editar</FontAwesomeIcon>
                                <FontAwesomeIcon icon= { faTrashCan } onClick={() => excluiCarro(index)}>Excluir</FontAwesomeIcon>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default CarList