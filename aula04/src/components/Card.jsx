
export default function Card(props) {
    const { img, title } = props;
  
    return (
      <div style={{ width: 70, border: "1px solid black" }}>
        <img width={40} src={img} alt={title} />
        <span>{title}</span>
      </div>
    );
  }
