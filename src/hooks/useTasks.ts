import { useEffect, useState, useRef } from "react";
import { ITask } from "../ITask";

const useTasks = () => {

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

  const removeTask = (taskIndex: number, isDone: boolean) => {
    console.log(taskIndex, isDone);

    if(!isDone) {
      const newTasks: ITask[] = [...tasks];

      const deletedTask = newTasks.splice(taskIndex, 1) 
      console.log(deletedTask);

      setTasks(newTasks);
      window.localStorage.setItem('todoTasks', '')
      window.localStorage.setItem('todoTasks', JSON.stringify(newTasks))

      return
    }
    const newDoneTasks: ITask[] = [...doneTasks]

    const deletedTask = newDoneTasks.splice(taskIndex, 1)
    console.log(deletedTask);
    

    setDoneTasks(newDoneTasks);
    window.localStorage.setItem('doneTasks', '')
    window.localStorage.setItem('doneTasks', JSON.stringify(newDoneTasks))
    
    return
  }

  return {tasks, doneTasks, addTask, deleteTask, retrieveTask, removeTask, taskInput}
}

export default useTasks