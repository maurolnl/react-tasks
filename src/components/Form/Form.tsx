import Button from "../Button/Button";
import {CSSProperties, useState} from 'react'
interface FormProps {
  //handleSubmit: React.FormEventHandler<HTMLFormElement>;
  typeInput: string;
  //onChange: React.FormEventHandler<HTMLInputElement>;
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

  return (
    <div className="card">
      <div style={formStyle} className="card-body">
        <form onSubmit={handleSubmit}>
          <input
            type={FormProps.typeInput}
            onChange={handleChange}
            value={newTask}
            className={FormProps.inputClassName}
            ref={FormProps.inputRef}
            placeholder="Write a task over here..."
            autoFocus
          />
          <Button
            className={"btn btn-outline-success"}
            text={"Save"}
            isStyled={true}
            onClick={() => {}}
          />
        </form>
      </div>
    </div>
  );
}

const formStyle: CSSProperties = {
  backgroundColor: "var(--app-background-color)",
  border: "var(--app-color-secondary) 1px solid",
  borderRadius: "5px"
}
