import "./style.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <Header />

      <main>
        <h1 className="title">LISTA DE LINGUAGENS</h1>

        <Card
          title="Javascript"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
        />

        <Card
          title="HTML"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
        />

        <Card
          title="CSS"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
        />

        
      </main>

      <Footer idade={30} title="OLA USUARIO EU SOU O FOOTER" />
      <Footer idade={26} title="TODOS OS DIREITOS RESERVADOS" />
      <Footer />
      <Footer />
    </div>
  );
}

export default App;
