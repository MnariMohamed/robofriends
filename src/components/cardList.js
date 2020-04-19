import React from 'react';
import Card from './Card';

function cardList({robots}){
/*  if(true)
  throw new Error("no :'()'");
*/
  const robotsList=  robots.map(function (user, i){
return  <Card       key={i}   id={i}   name={robots[i].name}      email={robots[i].email}      />
    });
  return (
     <div>
     {robotsList}
  </div>
);
}
export default cardList;
