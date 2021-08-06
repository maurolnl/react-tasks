import Button from "../Button/Button";
import TaskTitle from "../TaskTitle/TaskTitle";
import './index.css'

interface TaskProps {
  taskClassName: string;
  buttonClassName: string;
  buttonText: string;
  isTaskTitleStyled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isButtonStyled: number;
  taskName: string;
  removeTask: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Task(TaskProps: TaskProps) {
  const removeButton = 3 
  return (
    <div
      className="task"
    >
      <TaskTitle
        taskName={TaskProps.taskName}
        isStyled={TaskProps.isTaskTitleStyled}
      />
      <div className="button-container">
        <Button
          className={TaskProps.buttonClassName}
          onClick={TaskProps.removeTask}
          text={'D'}
          isStyled={removeButton}
        />
        <Button
          className={TaskProps.buttonClassName}
          onClick={TaskProps.onClick}
          text={TaskProps.buttonText}
          isStyled={TaskProps.isButtonStyled}
        />
      </div>
    </div>
  );
}
