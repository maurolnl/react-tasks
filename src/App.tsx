import React, { useState, useRef } from "react";
import Task from './components/Task/Task';
import Button from './components/Button/Button';

type FormElement = React.FormEvent<HTMLFormElement>;
type InputElement = React.FormEvent<HTMLInputElement>;

interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [doneTasks, setDoneTasks] = useState<ITask[]>([]);
  const taskInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask(""); //wipe form input
    taskInput.current?.focus();
  };

  const addTask = (name: string) => {
    const newTasks: ITask[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };

  const handleChange = (e: InputElement) => {
    setNewTask(e.currentTarget.value);
  };

  const deleteTask = (taskIndex: number) => {
    const newTasks: ITask[] = [...tasks];
    newTasks[taskIndex].done = !newTasks[taskIndex].done;

    //delete task
    const doneTask = newTasks.splice(taskIndex, 1);
    setTasks(newTasks);

    //add done task to list
    const newDoneTasks: ITask[] = [...doneTasks, doneTask[0]];
    setDoneTasks(newDoneTasks);

    taskInput.current?.focus();
  };

  const retrieveTask = (taskIndex: number) => {
    const newDoneTasks: ITask[] = [...doneTasks];
    newDoneTasks[taskIndex].done = !newDoneTasks[taskIndex].done;

    //delete task from done list
    const retrievedTask = newDoneTasks.splice(taskIndex, 1);
    setDoneTasks(newDoneTasks);

    //add new task to list
    const newTasks: ITask[] = [...tasks, retrievedTask[0]];
    setTasks(newTasks);

    taskInput.current?.focus();
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
                  ref={taskInput}
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
          <div>
            {tasks.length > 0 ? <h2>Tasks!!!</h2> : null}
            {tasks.map((task: ITask, i: number) => (
                <Task 
                  key={i}
                  buttonClassName={"btn btn-outline-primary"}
                  taskClassName={"card card-body mt-2"}
                  buttonText={"✓"}
                  isButtonStyled={false}
                  isTaskTitleStyled={false}
                  taskName={task.name}
                  onClick={() => deleteTask(i)} 
                />
            ))}
            {doneTasks.length > 0 ? (
              <h2 style={{ marginTop: 20 }}>Done Tasks :D</h2>
            ) : null}
            {doneTasks.map((task: ITask, i: number) => (
               <Task 
                key={i}
                buttonClassName={"btn btn-outline-secondary"}
                taskClassName={"card card-body mt-2"}
                buttonText={"✗"}
                isButtonStyled={false}
                isTaskTitleStyled={true}
                taskName={task.name}
                onClick={() => retrieveTask(i)}
               /> 
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



export default App;
