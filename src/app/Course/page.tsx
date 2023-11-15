"use client";
import React from "react";
import { useState } from "react";
import "./course.scss";

export default function Course() {
  const [course, setCourse] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [courseList, setCourseList] = useState<
    { id: number; course: string }[]
  >([]);

  function handleChange(event: any) {
    setCourse(event.target.value);
  }

  function addCourse() {
    setCourseList((prev) => {
      return [...prev, { id: prev.length + 1, course: course }];
    });
    setCourse("");
  }

  function handleDelete(id: number) {
    // Pour que ce handle fonctionne, j'ai du typer l'evenement qu'il ce passait
    // a savoir preciser que evt est de type evevenement souris React
    return (evt: React.MouseEvent) => {
      const newCourseList = courseList.filter((item) => item.id != id);
      setCourseList(newCourseList);
      // evt.preventDefault();
    };
  }
  // console.log(taskList);
  return (
    <div className="course">
      <div className="course__form">
        <label className="course__form--label" htmlFor="course">
          {" "}
          Ajouter une course à faire
        </label>
        <input
          className="course__form--input"
          type="text"
          placeholder="Entrez une course à faire..."
          id="course"
          value={course}
          onChange={handleChange}
        ></input>
        {/* Ce qui suis permet d'afficher le bouton uniquement si le champ 
        input contient au moins UN caractère */}
        {course && (
          <button className="course__form--button" onClick={addCourse}>
            Ajouter
          </button>
        )}
      </div>
      <div className="course__list">
        <h3 className="course__list--title">Liste des tâches</h3>
        <ul className="course__list--items">
          {courseList.map((item, index) => (
            <li className="course__list--item" key={index}>
              {item.course}{" "}
              <button
                className="course__list__item--button"
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
