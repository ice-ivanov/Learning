import React from 'react'

const Item = (props) => {
  return (
    <div className='item' styles={{color: props.completed ? 'blue' : 'red'}}>
      <p>
        <input type="checkbox"
               checked={props.completed}
               onChange={() => props.onCheck(!props.completed)} />
        {props.text}
      </p>
      <hr/>
    </div>
  )
}

export default Item
