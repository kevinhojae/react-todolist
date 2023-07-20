import { useState } from "react";

function useInputs(defaultText) {
    const [todoInput, setTodoInput] = useState({ text: defaultText });

    const onChange = (e) => {
        const { value } = e.target;
        setTodoInput({
            ...todoInput,
            text: value,
        });
    };

    const reset = () => {
        setTodoInput({
            text: "",
        });
    };
    return [todoInput, onChange, reset];
}

export default useInputs;
