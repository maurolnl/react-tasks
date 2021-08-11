import Button from "../Button/Button";
import TaskTitle from "../TaskTitle/TaskTitle";
import TrashIcon from "../TrashIcon/TrashIcon";
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
  return (
    <div
      className="task"
    >
      <TaskTitle
        taskName={TaskProps.taskName}
        isStyled={TaskProps.isTaskTitleStyled}
      />
      <div className="button-container">
        <TrashIcon onClick={TaskProps.removeTask}/>
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
