import { CSSProperties } from "react";
import Button from "../Button/Button";
import TaskTitle from "../TaskTitle/TaskTitle";

interface TaskProps {
  taskClassName: string;
  buttonClassName: string;
  buttonText: string;
  isTaskTitleStyled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isButtonStyled: boolean;
  taskName: string;
}

export default function Task(TaskProps: TaskProps) {
  return (
    <div
      className={TaskProps.taskClassName}
      style={cardStyle}
    >
      <TaskTitle
        taskName={TaskProps.taskName}
        isStyled={TaskProps.isTaskTitleStyled}
      />
      <Button
        className={TaskProps.buttonClassName}
        onClick={TaskProps.onClick}
        text={TaskProps.buttonText}
        isStyled={TaskProps.isButtonStyled}
      />
    </div>
  );
}

const cardStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};
