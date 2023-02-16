import React from 'react'
import Counter from './Counter';

function AComp(props) {
    const {count,counter} = props;
  return (
    <div>
        <button onClick={props.counter}>CLick :{count}</button>
    </div>
  );
}

export default Counter(AComp)