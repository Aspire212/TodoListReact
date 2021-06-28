import React from "react";
import Btn from "../../Btn/index.jsx";

const ListItem = ({ title, id, setTasks, tasks, status, important }) => {
  const changeStatus = (id) => {
    let temp = JSON.parse(JSON.stringify(tasks))
    temp[id].status = !status;
    setTasks([...temp]);
  };

  const changeImportant = (id) => {
    let temp = JSON.parse(JSON.stringify(tasks))
    temp[id].important = !important;
    setTasks([...temp]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <li
      className={`d-flex align-items-baseline m-1 border rounded p-2
        ${important ? "important" : ""}
        ${status ? "complete" : ""}`}>
      <div
        onClick={() => changeStatus(id)}
        className={status ? "text complete" : "text"}>
        {title}
      </div>
      <div>
        <Btn
          title={<i className="bi bi-bell"></i>}
          className="btn btn-xs btn-success ml-2 imp"
          onClick={() => changeImportant(id)}
        />
      </div>
      <div>
        <Btn
          title={<i className="bi bi-trash"></i>}
          className="btn btn-xs btn-danger ml-2 del"
          onClick={() => deleteTask(id)}
        />
      </div>
    </li>
  );
};

export default ListItem;