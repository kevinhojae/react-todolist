import { TodoContext } from "../App";
import { useContext, useState, useRef, useEffect } from "react";
import useInputs from "../hooks/useInputs";

const Todo = ({ todo }) => {
  const dispatch = useContext(TodoContext);
  const [{ text }, onChange] = useInputs(todo.text);

  const [isEditing, setIsEditing] = useState(false);
  const editSpace = useRef(null);

  useEffect(() => {
    if (isEditing) {
      editSpace.current.focus();
    }
  }, [isEditing]);

  const onClickCheckbox = () => {
    dispatch({
      type: "CLICK-CHECKBOX",
      ...todo,
      id: todo.id,
      isChecked: !todo.isChecked,
    });
  };

  const onDelete = () => {
    dispatch({
      type: "DELETE",
      id: todo.id,
      isChecked: todo.isChecked,
    });
  };

  const onStartEdit = () => {
    setIsEditing(true);
    console.log("start edit");
  };

  const onSaveEdit = () => {
    setIsEditing(false);
    dispatch({
      type: "SAVE-EDIT",
      id: todo.id,
      text: text,
    });
    console.log("save edit");
  };

  return (
    <>
      <div className="todo">
        <input
          className="todo-check"
          type="checkbox"
          checked={todo.isChecked}
          onClick={onClickCheckbox}
          readOnly
        />
        {isEditing ? (
          <>
            <p>
              <input
                className="edit-text"
                value={text}
                onChange={onChange}
                ref={editSpace}
              />
            </p>
            <button className="edit" onClick={onSaveEdit}>
              📥
            </button>
          </>
        ) : (
          <>
            <p className="todo-text">{todo.task}</p>
            <button className="edit" onClick={onStartEdit}>
              ✏️
            </button>
          </>
        )}
        <button className="delete" onClick={onDelete}>
          🗑️
        </button>
      </div>
    </>
  );
};

export default Todo;
