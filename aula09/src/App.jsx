import { useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [duracao, setDuracao] = useState("");

  const [listaDisciplinas, setListaDisciplinas] = useState([]);

  function addItem(event) {
    event.preventDefault();

    if (disciplina === "" && duracao === "") {
      alert("Preencha todas as informações");
      return;
    }

    if (id) {
      //Pegando uma copia da lista de disciplinas (convertidas para String)
      const copiaListaDisciplinasString = JSON.stringify(listaDisciplinas);

      //Desfazendo a conversao da string (voltando para um array de objetos)
      const copiaListaDisciplinas = JSON.parse(copiaListaDisciplinasString);

      //Encontrando o index do elemento a ser alterado
      const index = copiaListaDisciplinas.findIndex((item) => item.id === id);

      //Alterando os valores do elemento encontrado
      copiaListaDisciplinas[index].disciplina = disciplina;
      copiaListaDisciplinas[index].duracao = duracao;

      //Setando o state para causar a re-renderizacao
      setListaDisciplinas(copiaListaDisciplinas);
    } else {
      setListaDisciplinas([
        ...listaDisciplinas,
        {
          id: Date.now(),
          disciplina: disciplina,
          duracao: duracao,
        },
      ]);
    }
    setDisciplina("");
    setDuracao("");
    setId("");
  }

  function apagarItem(id) {
    if (confirm("Deseja realmente apagar o item?")) {
      const result = listaDisciplinas.filter((item) => item.id !== id);
      setListaDisciplinas(result);
    }
  }

  function preencheEstados(item) {
    setDisciplina(item.disciplina);
    setDuracao(item.duracao);
    setId(item.id);
  }

  return (
    <div className="App">
      <h1>Cadastro de Disciplina</h1>

      <form onSubmit={addItem}>
        <input
          required
          value={disciplina}
          onChange={(event) => setDisciplina(event.target.value)}
          placeholder="Nome da disciplina"
        />

        <select
          value={duracao}
          onChange={(event) => setDuracao(event.target.value)}
        >
          <option value="">Selecione uma opção</option>
          <option value="40">40 horas</option>
          <option value="60">60 horas</option>
          <option value="80">80 horas</option>
        </select>

        <br />
        <br />

        <input type="submit" value={id ? "Salvar" : "Cadastrar"} />
      </form>

      {listaDisciplinas.length > 0 ? (
        <ul>
          {listaDisciplinas.map((item) => (
            <li key={item.id} style={{ border: "1px solid #9999" }}>
              <p>{item.id}</p>
              <p>{item.disciplina}</p>
              <p>{item.duracao}</p>

              <button onClick={() => apagarItem(item.id)}>Apagar</button>
              <button onClick={() => preencheEstados(item)}>Editar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum item cadastrado</p>
      )}
    </div>
  );
}

export default App;
