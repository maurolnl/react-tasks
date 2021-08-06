import Button from "../Button/Button";
import { useState} from 'react'
import './index.css'
interface FormProps {
  typeInput: string;
  addTask: (name: string) => void;
  taskInput: React.RefObject<HTMLInputElement>;
  inputClassName: string;
  inputRef: React.RefObject<HTMLInputElement>;
}

type FormElement = React.FormEvent<HTMLFormElement>;
type InputElement = React.FormEvent<HTMLInputElement>;

export default function Form(FormProps: FormProps) {

  const [newTask, setNewTask] = useState<string>("");

  const handleChange = (e: InputElement) => {
    setNewTask(e.currentTarget.value);
  };

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    if(newTask !== "") FormProps.addTask(newTask);
    setNewTask(""); //wipe form input
    FormProps.taskInput.current?.focus();
  };

  const formButton = 1

  return (
    <div className="form-container">
      <h1 className="form-title">Add a task! ✍ </h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type={FormProps.typeInput}
          onChange={handleChange}
          value={newTask}
          className="form-input"
          ref={FormProps.inputRef}
          placeholder="Write a task over here..."
          autoFocus
        />
        <Button
          className={"btn btn-outline-success"}
          text={"Save"}
          isStyled={formButton}
          onClick={() => {}}
        />
      </form>
    </div>
  );
}
