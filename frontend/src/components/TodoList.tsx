import React from 'react';
import './TodoList.css';

export const TodoList: React.FC = () => {
  return (
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
  );
};
