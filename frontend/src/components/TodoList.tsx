import React from 'react';
import './TodoList.css';
import {TodoItem} from './TodoItem'

export const TodoList: React.FC = () => {
  return (
    <ul className="TodoList_list">
      <TodoItem text='洗い物をする' completed={true} />
      <TodoItem text='洗濯物を干す' completed={false} />
      <TodoItem text='買い物へ行く' completed={false} />
    </ul>
  );
};
