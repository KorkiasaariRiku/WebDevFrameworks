import React from "react";
import Items from "./Items";

const List = props => {
  return <ul>
    {
      props.items.map(i => <Items {...i} key={ i.id }/>)
    }
  </ul>
}

export default List;