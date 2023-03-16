import React,{Component} from "react";
import Formulario from "./Formulario";
import Tarefa from "./Tarefa";
import * as F from "./style.js";


export default class Main extends Component {
    state = {
        novaTarefa: '',
        tarefa: [],
        index:-1,
    }


ComponentDidUpdate(prevProps, prevState){
    const{tarefas}= this.state;
    if(tarefas === prevState.tarefas)return 
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

ComponentDidMount(){
    const tarefas = JSON.parse(localStorage.getItem('tarefas'))
    if(!tarefas) return 
    this.setState({tarefas});   
}

formAlteracao = (event) => {
    this.setState({
        novaTarefa: event.target.value,
    })
}

formSubmit = (event)=>{
    event.preventDefault();
    const{ tarefas, index} = this.state;
    let{novaTarefa} = this.state;
    novaTarefa = novaTarefa.trim(); // eliminando os espaços

    if(tarefas.indexOf(novaTarefa) !== -1){ // verificando se existe tarefa
        return; 
    }

    const novasTarefas = [...tarefas]; // copia do array

    if(index === -1){
        this.setState({
            tarefas: [...novasTarefas, novaTarefa],
            novaTarefa: "", 
        })
    }else{novasTarefas[index]= novaTarefa;
        this.setState({
            tarefas:[...novasTarefas],
            index: -1,
            novaTarefa: ""
        })    
    }

}

formDelete = (event, idenx) => {
    const {tarefas} = this.state;
    const novasTarefas = [... tarefas];
    novasTarefas.splice(index, 1)
    this.setState({
        tarefas: [...novasTarefas],
    })
}

formEdit = (event, index)=>{
    const {tarefas} = this.state;
    this.setState({
        index: index,
        novaTarefa: tarefas[index],
    })
}

render(){
    const {novaTarefa, tarefas} = this.state;
    return(
        <F.Main>
            <F.Titulo>Minhas Tarefas</F.Titulo>

            <Formulario
            formSubmit = {this.formSubmit}
            formAlteracao = {this.formAlteracao}
            novaTarefa = {novaTarefa}
            />

            <Tarefa
            formEdit = {this.formEdit}
            formDelete = {this.formDelete}
            tarefas = {tarefas} 
            />
        </F.Main>
    )}
}