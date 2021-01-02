import React from "react";
const Wish = ({data}) => {
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