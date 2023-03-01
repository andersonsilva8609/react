import Card from "./components/Card";

import data from "./data/dados.json";

export default function App() {

  return (
    <div>
      <h1>Hello App</h1>
        {
          data.map((dado)=> (
            <Card 
              key={dado.id}
              dado={dado}
            />
          ))
        }
    </div>
  );
}
