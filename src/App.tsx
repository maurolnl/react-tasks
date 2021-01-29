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
          <dl>
            {tasks.map((task: ITask, i: number) => (
              <div key={i} className="card card-body mt-2">
                <h2 style={{ textDecoration: task.done ? "line-through" : "" }}>
                  {task.name}
                </h2>
                <div>
                  {task.done ? (
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => toggleDone(i)}
                    >
                      ✗
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => toggleDone(i)}
                    >
                      ✓
                    </button>
                  )}
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

const buttonStyle: CSSProperties = {
  float: "right",
  marginTop: 10,
};

export default App;
