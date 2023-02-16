import React  from 'react'
import Counter from './Counter';

function BComp(props) {
    console.log("props in b",props)
    const {count,counter}=props;
  return (
    <div>
        <button onMouseOver={counter}>CLick :{count}</button>
    </div>
  )
}

export default Counter(BComp)