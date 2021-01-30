import { findByLabelText } from "@testing-library/react";
import React, { CSSProperties, useState } from "react";

/*export interface INewTask {
  newTask: string;
}*/

type FormElement = React.FormEvent<HTMLFormElement>;
type InputElement = React.FormEvent<HTMLInputElement>;

interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  //const [newTask, setNewTask] = useState<INewTask | undefined>({newTask: ""});
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask(""); //wipe form input
  };

  const addTask = (name: string) => {
    const newTasks: ITask[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };

  const handleChange = (e: InputElement) => {
    setNewTask(e.currentTarget.value);
  };

  const toggleDone = (taskIndex: number) => {
    const newTasks: ITask[] = [...tasks];
    newTasks[taskIndex].done = !newTasks[taskIndex].done;

    setTasks(newTasks);
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  onChange={handleChange}
                  value={newTask}
                  className="form-control"
                  autoFocus
                />
                <button className="btn btn-outline-success" style={buttonStyle}>
                  Save
                </button>
              </form>
            </div>
          </div>
          <div>
            {tasks.length > 0 ? <h2>Tasks!!!</h2> : null}
            {tasks.map((task: ITask, i: number) => (
              <div key={i} className="card card-body mt-2" >
                <div >
                  {task.done ? (
                    <div style={cardStyle}>
                      <h3
                        style={{
                          textDecoration: task.done ? "line-through" : "",
                        }}
                      >
                        {task.name}
                      </h3>
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => toggleDone(i)}
                      >
                        ✗
                      </button>
                    </div>
                  ) : (
                    <div style={cardStyle}>
                      <h3
                        style={{
                          textDecoration: task.done ? "line-through" : "",
                        }}
                      >
                        {task.name}
                      </h3>
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => toggleDone(i)}
                      >
                        ✓
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const cardStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};

const buttonStyle: CSSProperties = {
  float: "right",
  marginTop: 10,
};

export default App;
