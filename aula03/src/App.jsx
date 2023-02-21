import "./styles.css"

const nome = "trabalho";

export default function App(){
  return (
    <div className="pai">
      <header className="header">
        Mesa de {nome} 03 - <strong>React</strong>
      </header>
      <div className="filha">
        <h1>
          <h1 className="title"><b>Lorem ipsum dolor sit amet.</b></h1>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          libero quasi suscipit laudantium quis soluta praesentium eveniet
          facere eligendi vero aut eaque, minima pariatur doloremque porro at?
          Odio at eligendi qui quo ex sint optio voluptate consequatur minus
          beatae ea alias recusandae voluptas rerum velit suscipit voluptatum,
          obcaecati placeat. Ducimus.
        </p><br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam
          rem aspernatur error, magnam atque veritatis consectetur ducimus
          fugiat voluptatibus, aut nisi repudiandae eum exercitationem.
          Consectetur aspernatur iure, fuga similique velit ratione culpa quod
          cum dicta vitae soluta quo nisi tempora repellat veniam dolorem
          dignissimos explicabo facere mollitia est ex!
        </p><br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          deleniti repudiandae? Distinctio minus culpa, perferendis tempore iste
          aut veritatis cumque, esse blanditiis consequatur expedita et beatae
          maiores laudantium saepe itaque vel quibusdam sunt eveniet quis sed
          labore quia. Nobis illo nesciunt ab debitis blanditiis aspernatur
          delectus labore doloribus repellat harum.
        </p><br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          ipsam voluptas, dignissimos iste maiores tempora pariatur accusantium
          sed? Aliquid nesciunt omnis minima vitae excepturi qui tempore impedit
          reiciendis distinctio magni! Voluptatum enim obcaecati, beatae iusto
          excepturi reiciendis quia magnam delectus eveniet neque in iure,
          ratione eos odit totam facilis nulla.
        </p><br />
        <p className="time">Equipe: Anderson Silva</p>
        <footer className="footer">Todos os direitos reservados &copy; 2023.</footer>
      </div>
    </div>
  );
}