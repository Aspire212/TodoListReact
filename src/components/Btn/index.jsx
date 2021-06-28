import React from 'react'

const Btn = ({ className, title, onClick, id, isActive }) => {
  return (
    <button 
      className={ 
        className +
        (+id === isActive ? ' active' : '') 
      }
      id={id}
      onClick={onClick}
    >
      { title }
    </button>
  )
}

export default Btn