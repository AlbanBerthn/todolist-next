"use client";
import React from "react";
import { useState } from "react";
import "./task.scss";

export default function Task() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState<{ id: number; task: string }[]>([]);

  function handleChange(event: any) {
    setTask(event.target.value);
  }

  function addTask() {
    setTaskList((prev) => {
      return [...prev, { id: prev.length + 1, task: task }];
    });
    setTask("");
  }

  function handleDelete(id: number) {
    // Pour que ce handle fonctionne, j'ai du typer l'evenement qu'il ce passait
    // a savoir preciser que evt est de type evevenement souris React
    return (evt: React.MouseEvent) => {
      const newTaskList = taskList.filter((item) => item.id != id);
      setTaskList(newTaskList);
      // evt.preventDefault();
    };
  }
  // console.log(taskList);
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
        {/* Ce qui suis permet d'afficher le bouton uniquement si le champ 
        input contient au moins UN caractère */}
        {task && (
          <button className="task__form--button" onClick={addTask}>
            Ajouter
          </button>
        )}
      </div>
      <div className="task__list">
        <h3 className="task__list--title">Liste des tâches</h3>
        <ul className="task__list--items">
          {taskList.map((item, index) => (
            <li className="task__list--item" key={index}>
              {item.task}{" "}
              <button
                className="task__list__item--button"
                // onClick={() => this.fetchData(handleDelete(item.id))}
                onClick={handleDelete(item.id)}
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
