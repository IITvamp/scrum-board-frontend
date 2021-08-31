import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import ListItem from "./LIstItem";


function Board() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedLists, setLoadedLists] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8011/list/`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const responseArray = [];

        for (const _id in data.data) {
          console.log(_id);
          const list = {
            ...data.data[_id],
            
          };
          responseArray.push(list);
          console.log(list.name);
          console.log(typeof list);
          console.log(typeof list.cards);
        }
        setIsLoading(false);

        setLoadedLists(responseArray);
      });
  }, []);

  if (isLoading) {
    <section>
      <p>Loading....</p>
    </section>;
  }

  return <ListItem lists={loadedLists}></ListItem>;
}

export default Board;
