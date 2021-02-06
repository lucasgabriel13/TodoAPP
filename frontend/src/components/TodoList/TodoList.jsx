import React, { useState, useCallback } from "react";
import { FiTrash2 } from "react-icons/fi";
import { GoPencil, GoCheck } from "react-icons/go";

import api from "../../api";

import "./TodoList.css";

function TodoList(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [value, setValue] = useState(props.description);

  const handleChecked = useCallback((e) => {
    setIsChecked(e.target.checked);
  }, []);

  const handleClickDelete = useCallback(() => {
    api.delete(`/registers/${props.id}`);
  }, [props.id]);

  const handleClickEdit = useCallback((e) => {
    e.preventDefault();
    setIsDisabled(false);
    setValue(e.target.value);
  }, []);

  const handleUpdate = useCallback(() => {
    api.put(`registers/${props.id}`, { description: value });
    setIsDisabled(true);
    alert("Todo alterado com sucesso!");
  }, [props.id, value]);

  return (
    <div className="Todo">
      <div className="Todo-description">
        <input type="checkbox" checked={isChecked} onChange={handleChecked} />
        <input
          id="input"
          className={isChecked ? "Label-checked" : null}
          type="text "
          value={value}
          disabled={isDisabled}
          onChange={handleClickEdit}
        />
        {props.children}
      </div>
      <div className="Group-buttons">
        <button
          style={{ backgroundColor: "#28A745" }}
          onClick={handleUpdate}
          disabled={isDisabled}
        >
          <GoCheck size={22} />
        </button>
        <button
          style={{ backgroundColor: "#007BFF" }}
          onClick={handleClickEdit}
        >
          <GoPencil size={22} />
        </button>
        <button
          style={{ backgroundColor: "#DC3545" }}
          onClick={handleClickDelete}
        >
          <FiTrash2 size={22} />
        </button>
      </div>
    </div>
  );
}

export default TodoList;
