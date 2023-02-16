import React,{useState} from 'react'
const Counter=(WrappedComp)=>{
    function Counter(props) {
        const [count,setCount]=useState(0);
        const increment=()=>{
            setCount(count+1);
        }
    return (
        <div>
            <WrappedComp count={count+1} counter={increment} />
        </div>
        
    )
  }
  return Counter
}

export default Counter