import styled from 'styled-components';
import { FaEdit, FaWindowClose } from 'react-icons/fa'

export const From = styled.form`
    margin-top: 30px;
    display: flex;
    align-items: center
    justify-content: center;
` 
export const InputText = styled.input`
    height: 40px;
    padding: 0 20px;
    font-size: 20px;
    border: 1px solid #ccc;
    min-width: 80%;
`

export const Button = styled.button`
    border: none;
    height: 40px;
    width: 40px;
    background: #f04c64;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover{
        opacity: 0.8;
    }
`

export const Main = styled.div`
    background: white;
    padding: 30px;
    margin: 50px auto;
    max-width: 500px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgb(0,0,0,0.5);
`

export const Titulo = styled.h1`
    font-size: 28px;
    text-align: center;
`

export const Tarefas = styled.ul`
    margin-top: 30px;
`

export const ItensLista = styled.li`
    display: felx;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    transition: all 400ms;
    :hover{
        background: #d4f7ff;
    }
`

export const Icones = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const IconEdit = styled(FaEdit)`
    margin-right: 15px;
    color: #3fa4ba;
    cursor: pointer;
    transition: all 200ms;
    :hover{
        transform: scale(1.3)
    }
`
export const IconDelete = styled(FaWindowClose)`
    margin-right: 15px;
    color: #f04c64;
    cursor: pointer;
    transition: all 400ms;
    :hover{
        transform: scale(1.3)
    }
`