
export default function Footer(props) {
    console.log(props);
  
    return (
      <footer>
        <center>{props.title ? props.title : "Valor Default"}</center>
        <center>{props.idade ? props.idade : 0}</center>
      </footer>
    );
  }
  
  