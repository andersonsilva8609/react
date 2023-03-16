import { useState } from "react";

function App() {
  const [listaNomes, setListaNomes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [inputCidade, setInputCidade] = useState("");

  function addName() {

    const novoItem = {
      name: inputText,
      cidade: inputCidade,
    };
     /*spread(...) para mudar estado*/
    setListaNomes([...listaNomes, novoItem]);
    setInputText("");
    setInputCidade("");
  }

  return (
    <div>
      <h1>Hello World</h1>
      {/* <h2>{inputText}</h2> */}
      <ul>
        {listaNomes.map((item, indice) => (
          <li key={indice}>
            {item.name} - {item.cidade}
          </li>
        ))}
      </ul>
      <input
        placeholder="Nome..."
        value={inputText}
        /*guadando o valor que o usuário digitou*/
        onChange={(event) => setInputText(event.target.value)}
      />
      <input
        placeholder="Cidade..."
        value={inputCidade}
        onChange={(event) => setInputCidade(event.target.value)}
      />
      <button onClick={addName}>Clicar</button>
    </div>
  );
}

export default App;

