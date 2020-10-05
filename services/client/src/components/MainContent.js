import React from 'react'
import Item from './Objects'

const MainContent = ({tasks, updateTask}) => {
  const onCheck = (status, item) => {
    updateTask({...item, completed:status})
  }
  const dataMap = tasks.map(item =>
    <Item key={item.id}
          onCheck={status => onCheck(status, item)}
          text={item.text}
          completed={item.completed} />)
  return (
    <div>
      <h1>Tasks</h1>
      {dataMap}
    </div>
  )
}

export default MainContent
