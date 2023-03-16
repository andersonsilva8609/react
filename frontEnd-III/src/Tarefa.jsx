import React from "react";
import * as F from "./style.js";
import PropTypes from 'prop-types';

export default function Tarefas({tarefas, formDelete, formEdit}){
    return(
        <F.Tarefas>
            {tarefas.map((tarefa, index)=> (
            <F.ItensLista key={tarefa}>
                {tarefa}
                <F.Icones>
                    <F.IconEdit 
                    onClick={(event)=> formEdit(event, index)}
                    />
                    <F.IconDelete 
                    onClick={(event)=> formDelete(event, index)}
                    />
                </F.Icones>
            </F.ItensLista>
            ))}
        </F.Tarefas>
    )
}

Tarefas.propTypes = {
    formEdit: PropTypes.func.isRequired,
    formDelete: PropTypes.func.isRequired,
    tarefas: PropTypes.string.isRequired,
}