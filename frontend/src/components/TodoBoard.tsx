import React from "react";
import './TodoBoard.css';
import { TodoForm } from './TodoForm';
import { TodoFilter } from './TodoFilter';

export const TodoBoard: React.FC = () => {
  return (
    <div className="TodoBoard_content">
      <TodoForm />
      <TodoFilter />
      <ul className="TodoList_list">
        <li className="TodoItem_item">
          <div className="TodoItem_todo">
            <label>
              <input type="checkbox" className="TodoItem_checkbox" checked={true} />
              <span>洗い物をする</span>
            </label>
          </div>
          <div className="TodoItem_delete">
            <button className="TodoItem_button">x</button>
          </div>
        </li>
        <li className="TodoItem_item">
          <div className="TodoItem_todo">
            <label>
              <input type="checkbox" className="TodoItem_checkbox" />
              <span>洗濯物を干す</span>
            </label>
          </div>
          <div className="TodoItem_delete">
            <button className="TodoItem_button">x</button>
          </div>
        </li>
        <li className="TodoItem_item">
          <div className="TodoItem_todo">
            <label>
              <input type="checkbox" className="TodoItem_checkbox" />
              <span>買い物へ行く</span>
            </label>
          </div>
          <div className="TodoItem_delete">
            <button className="TodoItem_button">x</button>
          </div>
        </li>
      </ul>
    </div>
  );
};
