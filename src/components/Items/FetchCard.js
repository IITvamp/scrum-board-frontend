import "bootstrap/dist/css/bootstrap.min.css";
import CardItem from "./CardItem";

import { useState, useEffect } from "react";

function FetchCard(props) {
  const cardarray = [];
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    props.cardarray.map((cardId) => {
      fetch(`http://localhost:8011/cards/` + cardId)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const card = {
            ...data.data,
          };
          cardarray.push(card);
        });
    }, []);
  });

  return <CardItem cardarray={cardarray}></CardItem>;
}

export default FetchCard;
