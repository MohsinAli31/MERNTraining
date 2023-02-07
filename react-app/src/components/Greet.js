import React from 'react';

const Greet=(props)=> {
  console.log(props)
  return <div> Hello {props.name} {props.children}</div>;
}

export default Greet;
