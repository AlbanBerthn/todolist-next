"use client";
import { useState } from "react";
import "./task.scss";

export default function Task() {
  const [task, setTask] = useState("");

  function handleChange(event: any) {
    setTask(event.target.value);
  }
  return (
    <div className="task">
      <div className="task__form">
        <label className="task__form--label" htmlFor="task">
          {" "}
          Ajouter une tâche
        </label>
        <input
          className="task__form--input"
          type="text"
          placeholder="Entrez une tâche..."
          id="task"
          value={task}
          onChange={handleChange}
        ></input>
        <button className="task__form--button">Ajouter</button>
      </div>
      <div className="task__list">
        <ul className="task__list_items"></ul>
      </div>
    </div>
  );
}
