import React, { useState, useCallback } from "react";
import api from "../../api";

import "./InputMenu.css";

function InputMenu() {
  const [valueInput, setValueInput] = useState([""]);

  const handleChange = useCallback((e) => {
    setValueInput(e.target.value);
  }, []);

  const handleClickCreate = useCallback(
    (e) => {
      e.preventDefault();
      api.post("/registers", { description: valueInput });
      setValueInput("");
    },
    [valueInput]
  );

  const handleClickCancel = useCallback(() => {
    setValueInput("");
  }, []);

  return (
    <>
      <h2>Todo List</h2>
      <div className="InputMenu">
        <div className="Menu-content">
          <label htmlFor="inputMenu">Add an Item</label>
          <input
            id="inputMenu"
            type="text"
            value={valueInput}
            onChange={handleChange}
          />
        </div>
        <div className="group-button">
          <button
            style={{ backgroundColor: "#007BFF" }}
            onClick={handleClickCreate}
          >
            Create
          </button>
          <button
            style={{ backgroundColor: "#DC3545" }}
            onClick={handleClickCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default InputMenu;
