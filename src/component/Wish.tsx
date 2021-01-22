import React from "react";
import { WishData } from '../page/MyWishes';

interface Props {
  data: WishData;
}

const Wish = ({data}: Props) => {
  const tagList = data.tags.map((tag, idx) => <li key={idx}>{tag}</li>);
  return (
    <li className="wish">
      <div>
        <div className="square">
        <img src={data.img}/>
        </div>
        <div>
          <p>{data.title}</p>
          <ul>{tagList}</ul>
        </div>
      </div>
    </li>
  )
}
export default Wish;