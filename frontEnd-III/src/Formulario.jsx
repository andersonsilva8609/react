import React, { useState } from "react";
import {FaPlus} from 'react-icons/fa';
import * as F from "./style.js";
import PropTypes from 'prop-types';


export default function Formulario({formAlteracao, categoria, data, formSubmit, novaTarefa}){
    
    const [campDescricao, setDescricao] = useState('');

    return(
        <F.Form onSubmit={formSubmit} action="#">
            <F.InputText onChange={formAlteracao} type="text" value={novaTarefa} />
            <F.InputText onChange={<select>
                                        <option value="trabalho">Trabalho</option>
                                        <option value="lazer">Lazer</option>
                                        <option value="prioridade">Trabalho</option>
                                        <option value="outros">Outros</option>        
                                        </select>} type="text" value={categoria} />
            <F.InputText onChange={dataFormatada} type="date" value={data}/>
            <F.InputText onChange={(event)=> setDescricao(event.target.value)} type="text" value={campDescricao}/>
            <F.Button type="submit">
                <FaPlus />
            </F.Button>
        </F.Form>
    )
}

Formulario.propTypes = {
    formAlteracao: PropTypes.func.isRequired,
    categoria: PropTypes.func.isRequired,
    data: PropTypes.func.isRequired,
    descricao: PropTypes.func.isRequired,
    formSubmit: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired,
}

function dataFormatada(){
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    dataAtual = dia + '/' + mes + '/' + ano;
}