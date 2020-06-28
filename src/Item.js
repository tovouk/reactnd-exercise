import React from 'react'

function Item(props){
  return (
  	  <li key={props.item[1]}>{props.item[0]}</li>
  )
}

export default Item