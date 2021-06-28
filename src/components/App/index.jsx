import React, { useState, useEffect } from 'react';
import Title from '../Title/index.jsx'
import AddTask from '../AddTask/index.jsx'
import TaskInfo from '../TaskInfo/index.jsx'
import ToggleTasks from '../ToggleTasks/index.jsx'
import List from '../List/index.jsx'


const App = ({ firstTasks }) => {
  
  const [toggle, setToggle] = useState(0);
  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState([...firstTasks]);
  const [search, setSearch] = useState([]);
  const [done, setDone] = useState([]);
  const [important, setImportant] = useState([]);
  const toggleValue = [tasks, important, done, search];
  

  useEffect(() => {
    setTasks(tasks)
    setDone(tasks.filter(task => task.status))
    setImportant(tasks.filter(task => task.important === true))
    setSearch(tasks)
  }, [tasks])
  
  return (
    <div className='container'>
      <Title />
      <TaskInfo 
        allTasks={ tasks.length }
        completeTasks={ done.length }
      />
      <AddTask
        value={ value }
        setValue={ setValue }
        setTasks={ setTasks }
        tasks={ tasks }
        setSearch={ setSearch }
        toggle={ toggle }

      />
      <ToggleTasks
        toggle={ toggle } 
        setToggle={ setToggle }
      />
        
      <div>
        <List 
          list={ toggleValue[toggle] }
          setTasks={ setTasks }
          tasks={ tasks }
          />
      </div>
     
    </div>
  )
}

export default App