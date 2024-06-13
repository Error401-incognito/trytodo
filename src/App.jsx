import React, { useState } from 'react';
import './App.css';

function App(props) {
  const { list } = props;

  const [checkedItems, setCheckedItems] = useState(list);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'complete', 'incomplete'

  const handleCheckboxChange = (id) => {
    setCheckedItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() === '') return;

    const newId = checkedItems.length > 0 ? checkedItems[checkedItems.length - 1].id + 1 : 1;
    const newTaskItem = {
      id: newId,
      content: newTask,
      date: new Date().toISOString(),
      important: false,
      completed: false
    };

    setCheckedItems([...checkedItems, newTaskItem]);
    setNewTask('');
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredItems = checkedItems.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'complete') return item.completed;
    if (filter === 'incomplete') return !item.completed;
    return true;
  });

  const todoItems = filteredItems.map((item) => (
    <div key={item.id} className={`todo-item ${item.completed ? 'checked' : ''}`}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => handleCheckboxChange(item.id)}
      />
      <span>
        {item.content} - {item.date} - {item.important ? 'Important' : 'Not Important'}
      </span>
    </div>
  ));

  return (
    <div className="todo-list">
      <center>
        <h1>ToDo List</h1>
        <div className="add-task">
          <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Enter new task"
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className="filter">
          <label>
            Show:
            <select value={filter} onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="complete">Complete</option>
              <option value="incomplete">Incomplete</option>
            </select>
          </label>
        </div>
        {todoItems}
      </center>
    </div>
  );
}

export default App;
