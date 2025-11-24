* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: Arial, sans-serif;
}

body {
  background: #f3f4f6;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  background: #fff;
  padding: 20px 25px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.tabs {
  display: flex;
  margin-bottom: 10px;
}

.tab {
  flex: 1;
  padding: 10px;
  border: none;
  background: #e5e7eb;
  cursor: pointer;
}

.tab.active {
  background: #3b82f6;
  color: white;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form input {
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
}

.form button {
  padding: 8px;
  border: none;
  border-radius: 4px;
  background: #3b82f6;
  color: white;
  cursor: pointer;
}

.form button:hover {
  background: #2563eb;
}

.hidden {
  display: none;
}

.message {
  font-size: 0.9rem;
  color: red;
  min-height: 1.2rem;
}

#app-section {
  margin-top: 20px;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

#logout-btn {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background: #ef4444;
  color: white;
  cursor: pointer;
}

.todo-input {
  display: flex;
  margin-bottom: 10px;
  gap: 5px;
}

.todo-input input {
  flex: 1;
}

#todo-list {
  list-style: none;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  padding: 6px 8px;
  border-bottom: 1px solid #e5e7eb;
}

.todo-text.completed {
  text-decoration: line-through;
  color: #9ca3af;
}

.todo-actions button {
  margin-left: 5px;
  padding: 2px 6px;
  font-size: 0.8rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.todo-actions .delete-btn {
  background: #ef4444;
  color: white;
}

.todo-actions .done-btn {
  background: #22c55e;
  color: white;
}
