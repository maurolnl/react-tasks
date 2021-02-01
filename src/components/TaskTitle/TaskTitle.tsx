import { CSSProperties } from "react";

interface TaskTitleProps {
  taskName: string
  isStyled: boolean;
}

export default function TaskTitle (taskTitleProps: TaskTitleProps) {
  return (
    <h3 style={taskTitleProps.isStyled ? h3StyleDone : {}}>{taskTitleProps.taskName}</h3>
  )
}

const h3StyleDone: CSSProperties = {
  textDecoration: "line-through",
};