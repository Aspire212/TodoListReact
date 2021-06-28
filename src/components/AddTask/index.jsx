import React from 'react';
import Btn from '../Btn/index.jsx'

const AddTask = ({ 
  value, 
  setValue, 
  setTasks, 
  tasks, 
  setSearch, 
  toggle
 }) => {
  const plusTask = (e) => {
    value &&setTasks(
          [
            ...tasks,
            {
              text: value,
              id: tasks.length,
              status: false,
              important: false,
            }
          ]
          );
    setValue('');
    setSearch(tasks)
  }
  const searchTask = (e, temp) => {
    setValue(e.target.value);
    setSearch(temp.filter(task => 
      task.text
      .toLowerCase()
      .includes(e.target.value.toLowerCase())));
  }
  return (
    <div className='w-100 my-3 d-flex justify-content-center flex-column'>
      <div className='w-100 input-group d-flex justify-content-center my-2'>
        <input 
          type='text'
          placeholder={ 
            toggle === 3 ?
            'type to search or add Todo' :
            'add Todo'
          }
          className='w-75 rounded-left border p-2'
          value={value}
          onChange={(e) => searchTask(e, tasks)}
        />
        <div className='input-group-append'>
          <Btn
            className='btn btn-primary'
            title={<i className="bi bi-plus-circle-fill addTask-btn">
                        </i>}
            onClick={ plusTask }
          />
        </div>
      </div>
    </div>
  )
}

export default AddTask






