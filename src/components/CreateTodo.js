import React, { useContext, useRef } from "react";
import { UserDispatch } from "../App";
import useInputs from "../hooks/useInputs";

const CreateTodo = () => {
    const dispatch = useContext(UserDispatch);
    const nextId = useRef(0);

    const [{ text }, onChange, reset] = useInputs("");

    const onCreate = () => {
        dispatch({
            type: "CREATE",
            id: nextId.current,
            text: text,
            isChecked: false,
        });
        reset();
        nextId.current += 1;
    };

    return (
        <div className="todo-input">
            <input
                type="input-text"
                placeholder="할 일을 입력하세요"
                onChange={onChange}
                value={text}
            />
            <button className="create-todo" onClick={onCreate}>
                추가
            </button>
        </div>
    );
};

export default CreateTodo;
