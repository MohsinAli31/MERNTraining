import React from 'react'

function childComp(props) {
  return (
    <button onClick={()=>props.parentEvent("child")}>greet</button>
  )
}

export default childComp