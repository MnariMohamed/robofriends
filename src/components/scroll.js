import React,{Component} from 'react';

function scroll(props) {
  return(
    <div style={{overflow: 'scroll', height: "900px"}}>
{props.children}
  </div>
  )
}

export default scroll;
