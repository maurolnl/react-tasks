import Form from "./components/Form/Form";
import ListOfTask from "./components/ListOfTask/ListOfTask";
import Footer from './components/Footer/Footer'
import './App.css'
import useTasks from "./hooks/useTasks";

function App(): JSX.Element {

  const {tasks, doneTasks, addTask, deleteTask, retrieveTask, removeTask, taskInput} = useTasks();

  const taskDone = 0
  const undoTask = 2

  return (
    <>
      <div className="main-container">
        <h1 className="title">Another TODO list ✨</h1>
        <div className="main-content">
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
              isButtonStyled={taskDone}
              isTaskTitleStyled={false}
              tasks={tasks}
              onClick={deleteTask}
              isDone={false}
              removeTask={removeTask}
            />
            {doneTasks.length > 0 ? (
              <h2 style={{ marginTop: 20 }}>Done Tasks :)</h2>
            ) : null}
            <ListOfTask
              tasks={doneTasks}
              buttonText={"✗"}
              isTaskTitleStyled={true}
              isButtonStyled={undoTask}
              taskClassName={"card card-body mt-2"}
              buttonClassName={"btn btn-outline-secondary"}
              onClick={retrieveTask}
              isDone={true}
              removeTask={removeTask}
            />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
