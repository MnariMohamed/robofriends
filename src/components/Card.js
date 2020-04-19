import React from 'react';

function Card(props) {
const url="https://robohash.org/"+props.id+"?200*200";
  return (
    <div className="tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5">
<img alt="robot" src={url} />
<div>
<h2>{props.name}</h2>
<p>{props.email}</p>
</div>
    </div>
  );

}

export default Card;
