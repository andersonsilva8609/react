import { useEffect, useState } from 'react'
import loadingIMG from "./img/loading.gif"


export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getUsers(){
    setLoading(true);
    try{
      const res = await fetch(`https://dummyjson.com/users/`);
      const dados = await res.json();
      setUsers(dados.users);
    }catch(erro){
     
    }finally{ 
      setLoading(false)
     }
  }

  useEffect(()=> {
    getUsers();
  }, []);

  return (
    <div className="App">
      <h1>Usuários</h1>
      { 
        loading === true ? <img src={loadingIMG} width={200}/>: null || 
        loading === false && users.length < 1 ? "Nenhum usuário encontrado" : null
      }
      
      <ul style={{listStyle: 'none'}}>
        {users.map((usuario)=> (
          <li  key={usuario.id} style={{border:'1px solid black', marginBottom: 8}}> 
            <h3>Nome Completo: {usuario.firstName +('  ')+ usuario.lastName}</h3>
            <p>Idade: {usuario.age}</p>
            <p>Gurpo Sanguíneo: {usuario.bloodGroup}</p>
            <p>Genero: {usuario.gender}</p>
            <p>Email: {usuario.email}</p>
            <p>Telefone: {usuario.phone}</p>
            <p>usuario: {usuario.username}</p>
            <img src={usuario.image} width={100} />
          </li>
        ))}
      </ul>
      
    </div>
  )
}
