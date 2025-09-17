import React, { useState } from "react";
import styles from "./ToDoList.module.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [overIndex, setOverIndex] = useState(null);

  const handleAddTask = () => {
    const trimmed = newTask.trim();
    if (!trimmed) return;
    setTasks([...tasks, trimmed]);
    setNewTask("");
  };
  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    setNewTask("");
  };
  const moveTaskUp = (index) => {
    if (index > 0) {
      const newTasks = [...tasks];
      const temp = newTasks[index];
      newTasks[index] = newTasks[index - 1];
      newTasks[index - 1] = temp;
      setTasks(newTasks);
    }
  };
  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const newTasks = [...tasks];
      const temp = newTasks[index];
      newTasks[index] = newTasks[index + 1];
      newTasks[index + 1] = temp;
      setTasks(newTasks);
    }
  };
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleDragStart = (index) => {
    setDraggingIndex(index);
  };

  const handleDragEnter = (index) => {
    if (index !== draggingIndex) {
      setOverIndex(index);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (index) => {
    if (draggingIndex === null || index === null) return;
    if (index === draggingIndex) {
      setDraggingIndex(null);
      setOverIndex(null);
      return;
    }
    const updated = [...tasks];
    const [moved] = updated.splice(draggingIndex, 1);
    const insertAt = draggingIndex < index ? index - 1 : index;
    updated.splice(insertAt, 0, moved);
    setTasks(updated);
    setDraggingIndex(null);
    setOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggingIndex(null);
    setOverIndex(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>To-Do List</h2>
      </div>
      <div className={styles.inputRow}>
        <input
          className={styles.input}
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add a new task..."
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAddTask();
          }}
        />
        <button className={styles.addButton} onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      {tasks.length === 0 ? (
        <div className={styles.emptyState}>
          No tasks yet. Add your first task!
        </div>
      ) : (
        <ol className={styles.list}>
          {tasks.map((task, index) => (
            <li
              className={`${styles.listItem} ${
                index === draggingIndex ? styles.dragging : ""
              } ${index === overIndex ? styles.dragOver : ""}`}
              key={index}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragEnter={() => handleDragEnter(index)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(index)}
              onDragEnd={handleDragEnd}
            >
              <span className={styles.taskText}>{task}</span>
              <div className={styles.actions}>
                <button
                  className={`${styles.iconButton} ${styles.moveButton}`}
                  onClick={() => moveTaskUp(index)}
                  aria-label="Move task up"
                  title="Move up"
                >
                  ↑
                </button>
                <button
                  className={`${styles.iconButton} ${styles.moveButton}`}
                  onClick={() => moveTaskDown(index)}
                  aria-label="Move task down"
                  title="Move down"
                >
                  ↓
                </button>
                <button
                  className={`${styles.iconButton} ${styles.deleteButton}`}
                  onClick={() => handleDeleteTask(index)}
                  aria-label="Delete task"
                  title="Delete"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default ToDoList;
