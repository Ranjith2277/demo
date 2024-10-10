import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const Todolist = () => {
  const [todo, setTodo] = useState('');
  const [db, setDb] = useState([]);

  const dataPost = () => {
    axios.post("http://localhost:3000/posts", { todo })
      .then(() => {
        alert("Data has been posted successfully");
        setTodo(''); // Reset the input field
        getData(); // Refresh the list after posting
      })
      .catch(() => {
        alert("Failed to post data");
      });
  };

  const getData = () => {
    axios.get("http://localhost:3000/posts")
      .then((response) => {
        setDb(response.data); // Set the response data to db state
        alert("Data has been retrieved successfully");
      })
      .catch(() => {
        alert("Failed to retrieve data");
      });
  };

  const updateData = (id, data) => {
    axios.put(`http://localhost:3000/posts/${id}`, { todo: data })
      .then(() => {
        alert("Data has been updated");
        getData(); // Refresh the list after updating
      })
      .catch(() => {
        alert("Failed to update data");
      });
  };

  const newData = (id) => {
    const data = prompt("Enter the new data");
    if (data) {
      updateData(id, data);
    }
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:3000/posts/${id}`)
      .then(() => {
        alert("Data has been deleted");
        getData(); // Refresh the list after deletion
      })
      .catch(() => {
        alert("Failed to delete data");
      });
  };

  console.log(db); // Optional, remove this in production

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Todo"
        variant="outlined"
        value={todo}
        onChange={(e) => setTodo(e.target.value)} // Handle input change
      />
      <br />
      <Button variant="contained" onClick={dataPost}>POST</Button>
      <Button variant="contained" onClick={getData}>Get</Button>

      <div>
        <ul>
          {Array.isArray(db) && db.map((item) => (
            <li key={item.id}>
              {item.todo}
              <Button onClick={() => newData(item.id)}>Edit</Button>
              <Button onClick={() => deleteTodo(item.id)}>Delete</Button> 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todolist;
