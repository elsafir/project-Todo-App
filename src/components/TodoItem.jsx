import React, { useContext } from 'react';
import { TodoContext } from '../App';

const TodoItem = ({ todo }) => {
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: 'line-through' }
    } else {
      return { textDecoration: 'none' }
    }
  }
  
  const { toggleCompleted, deleteTodo } = useContext(TodoContext)

  return (
    <div style={styles.todoItem}>
      <input type="checkbox" style={styles.checkbox} onChange={() => toggleCompleted(todo.id)}/>
      <p style={getTodoTitleStyle()}>{todo.title}</p>
      <button style={styles.button} onClick={() => deleteTodo(todo.id)}>x</button>
    </div>
  )
}

const styles = {
  todoItem: {
    color: "white",
    margin: "12px 0",
    borderRadius: "10px", // Lebih persegi
    backgroundColor: "#FF69B4", // Hot Pink
    border: "2px solid #FF69B4", // Hot Pink
    fontSize: "24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px", // Slight adjustment
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", // Shadow
    transition: "transform 0.2s ease-in-out", // Smooth transition
  },
  checkbox: {
    height: "18px",
    width: "18px",
  },
  button: {
    backgroundColor: "#BB0000", // Dark Red
    color: "#fff",
    height: "30px",
    width: "30px",
    borderRadius: "50%", // Circle
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s", // Smooth transition
  },
};

export default TodoItem