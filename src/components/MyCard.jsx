import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tags from './Tags';


function MyCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imagen} />
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Text>{props.descripcion} </Card.Text>

      </Card.Body>
      <Button variant={props.color}>Adóptame</Button>



      <Tags color={props.color} texto={props.texto}/>
    </Card>
  );
}

export default MyCard;