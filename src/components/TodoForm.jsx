import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title);
    setTitle('');
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  return (
    <div style={styles.container}>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          type="text"
          placeholder="Add your Todo"
          style={styles.formInput}
          onChange={(event) => {
            handleChangeTitle(event)
          }}
          value={title}
        />
        <button style={styles.button}>Add Todo</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: "32px",
  },
  formInput: {
    height: "66px",
    width: "40%",
    fontSize: "16px",
    padding: "16px 16px",
    border: "2px solid #FF1493", // Pink
    borderRadius: "10px",
    backgroundColor: "#F8F8FF", // Lavender
  },
  button: {
    height: "72px",
    fontSize: "16px",
    borderRadius: "36px", // Rounded
    backgroundColor: "#FF1493", // Pink
    color: "#FFF", // White
    border: "none",
    cursor: "pointer",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", // Shadow
    transition: "background-color 0.3s", // Smooth transition
  },
};

export default TodoForm;