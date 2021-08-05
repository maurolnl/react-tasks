import React, { useEffect, useState, useRef } from "react";
import Form from "./components/Form/Form";
import { ITask } from "./ITask";
import ListOfTask from "./components/ListOfTask/ListOfTask";

function App(): JSX.Element {

  const [tasks, setTasks] = useState<ITask[]>([]);
  const [doneTasks, setDoneTasks] = useState<ITask[]>([]);
  const taskInput = useRef<HTMLInputElement>(null);

  useEffect(function () {
    const lsTasks = window.localStorage.getItem('todoTasks')
    const lsDoneTasks = window.localStorage.getItem('doneTasks')

    const todoTasksToShow = lsTasks ? JSON.parse(lsTasks) : tasks
    const doneTasksToShow = lsDoneTasks  ? JSON.parse(lsDoneTasks) : doneTasks
    
    setTasks(todoTasksToShow)
    setDoneTasks(doneTasksToShow)
  }, [])

  const addTask = (name: string) => {
    const newTasks: ITask[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
    window.localStorage.setItem('todoTasks', '')
    window.localStorage.setItem('todoTasks', JSON.stringify(newTasks))
  };

  const deleteTask = (taskIndex: number) => {
    const newTasks: ITask[] = [...tasks];
    newTasks[taskIndex].done = !newTasks[taskIndex].done;

    //delete task
    const doneTask = newTasks.splice(taskIndex, 1);
    setTasks(newTasks);
    window.localStorage.setItem('todoTasks', '')
    window.localStorage.setItem('todoTasks', JSON.stringify(newTasks))

    //add done task to list
    const newDoneTasks: ITask[] = [...doneTasks, doneTask[0]];
    setDoneTasks(newDoneTasks);
    window.localStorage.setItem('doneTasks', '')
    window.localStorage.setItem('doneTasks', JSON.stringify(newDoneTasks))

    taskInput.current?.focus();
  };

  const retrieveTask = (taskIndex: number) => { //Change done task to undone
    const newDoneTasks: ITask[] = [...doneTasks];
    newDoneTasks[taskIndex].done = !newDoneTasks[taskIndex].done;

    //delete task from done list
    const retrievedTask = newDoneTasks.splice(taskIndex, 1);
    setDoneTasks(newDoneTasks);
    window.localStorage.setItem('doneTasks', '')
    window.localStorage.setItem('doneTasks', JSON.stringify(newDoneTasks))

    //add new task to list
    const newTasks: ITask[] = [...tasks, retrievedTask[0]];
    setTasks(newTasks);
    window.localStorage.setItem('todoTasks', '')
    window.localStorage.setItem('todoTasks', JSON.stringify(newTasks))

    taskInput.current?.focus();
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Form
            typeInput="text"
            addTask={addTask}
            taskInput={taskInput}
            inputClassName="form-control"
            inputRef={taskInput}
          />
          <div>
            {tasks.length > 0 ? (
              <h2 style={{ marginTop: 20 }}>Tasks!!!</h2>
            ) : null}
            <ListOfTask
              buttonClassName={"btn btn-outline-primary"}
              taskClassName={"card card-body mt-2"}
              buttonText={"✓"}
              isButtonStyled={false}
              isTaskTitleStyled={false}
              tasks={tasks}
              onClick={deleteTask}
            />
            {doneTasks.length > 0 ? (
              <h2 style={{ marginTop: 20 }}>Done Tasks :)</h2>
            ) : null}
            <ListOfTask
              tasks={doneTasks}
              buttonText={"✗"}
              isTaskTitleStyled={true}
              isButtonStyled={false}
              taskClassName={"card card-body mt-2"}
              buttonClassName={"btn btn-outline-secondary"}
              onClick={retrieveTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
