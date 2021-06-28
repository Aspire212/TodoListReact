import React from 'react'
import Btn from '../Btn/index.jsx'

const ToggleTasks = ({ toggle, setToggle }) => {
  
  return (
    <div className='w- btn-group my-2 d-flex justify-content-center'>
    
      <Btn
        className='btn btn-sm btn-outline-info'
        title={
           <span className='toggleBtn'>
              <i className="bi bi-list mr-1"></i>List
            </span>
        }
        onClick={(e) => setToggle(+e.currentTarget.id)}
        id={0}
        isActive={toggle}
      />
      
      <Btn
        className='btn btn-sm btn-outline-info'
        title={
          <span className='toggleBtn'>
            <i className="bi bi-bell mr-1"></i>Important
          </span>
        }
        onClick={(e) =>
        setToggle(+e.currentTarget.id)}
        id={1}
        isActive={toggle}
      />
      
      <Btn
        className='btn btn-sm btn-outline-info'
        title={
           <span className='toggleBtn'>
            <i className="bi bi-list-check mr-1"></i>Done
          </span>
        }
        onClick={(e) =>
        setToggle(+e.currentTarget.id)}
        id={2}
        isActive={toggle}
      />      
      <Btn
        className='btn btn-sm btn-outline-info'
        title={
          <span className='toggleBtn'>
            <i className="bi bi-search mr-1"></i>Search
          </span>
          }
        onClick={(e) =>
        setToggle(+e.currentTarget.id)}
        id={3}
        isActive={toggle}
      /> 
    </div>  
  )
}

export default ToggleTasks