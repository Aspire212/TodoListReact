import React from 'react'

const TaskInfo = ({ allTasks, completeTasks }) => {
  return (
    <div className='w-100 my-2 text-secondary text-center'>
      <span className='text-primary font-weight-bold'>
        { allTasks }
      </span> more to do, <span className='text-success font-weight-bold'>
        { completeTasks } 
      </span> complete
    </div>  
  )
}

export default TaskInfo