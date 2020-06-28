import React from 'react'

function DeleteItem(props){
  return (
  	<button onClick={props.deleteLastItem} disabled={props.noItemsFound()}>
          Delete Last Item
    </button>
  )
}

export default DeleteItem