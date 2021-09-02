import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import ListView from "./Listview";

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
          console.log(data.data[_id]);
          const list = {
            ...data.data[_id],
          };

          console.log(list.cards);

          responseArray.push(list);
          console.log(list.name);
          console.log(typeof list);
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

  return (
    <div className="row">
      {loadedLists.map((list) => {
        console.log(list.cards);
        console.log(list._id);
        console.log(list.name);
        return (
          <ListView id={list._id} title={list.name} cardarray={list.cards} />
        );
      })}
    </div>
  );
}

export default Board;
