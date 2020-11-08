import React from "react";
import './TodoBoard.css';
import { TodoForm } from './TodoForm';
import { TodoFilter } from './TodoFilter';
import { TodoList } from './TodoList';

export const TodoBoard: React.FC = () => {
  return (
    <div className="TodoBoard_content">
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </div>
  );
};
