import "bootstrap/dist/css/bootstrap.min.css";
import CardView from "../Views/CardView";

function CardItem(props) {
  // const cardarray = [];

  // for(const card in props.cardarray){
  //   const cardItem={
  //     ...card
  //   }
  //   cardarray.push(cardItem);
  //   console.log(cardItem);
  // };
  return (
    <div className="column row d-flex justify-content-center ">
      {props.cardarray.map((card) => {
        return <CardView id={card.id} title={card.name} 
        description={card.description} />;
      })}
    </div>
  );
}
export default CardItem;
