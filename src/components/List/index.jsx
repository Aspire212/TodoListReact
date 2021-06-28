import React from 'react';
import ListItem from './ListItem/index.jsx'

const List = ({ list, setTasks, tasks }) => {
  return (
    <ol className='w-100 my-3 d-flex justify-content-center flex-column'>
      {
        list.map((task, id) =>
          <ListItem 
            key={task.id}
            id={task.id}
            title={task.text}
            setTasks={setTasks}
            tasks={tasks}
            status={task.status}
            important={task.important}
          />
        )
      }
    </ol>  
  )
}

export default List;