import { ITask } from '../../ITask';
import Task from '../Task/Task';

interface ListOfTaskProps {
  tasks: ITask[];
  onClick: Function;
  buttonClassName: string;
  buttonText: string;
  taskClassName: string;
  isButtonStyled: boolean;
  isTaskTitleStyled: boolean
}

export default function ListOfTask (ListOfTaskProps: ListOfTaskProps) {
  return(
    <>
      {ListOfTaskProps.tasks.map((task: ITask, i: number) => (
      <Task 
        key={i}
        buttonClassName={ListOfTaskProps.buttonClassName}
        taskClassName={ListOfTaskProps.taskClassName}
        buttonText={ListOfTaskProps.buttonText}
        isButtonStyled={ListOfTaskProps.isButtonStyled}
        isTaskTitleStyled={ListOfTaskProps.isTaskTitleStyled}
        taskName={task.name}
        onClick={() => ListOfTaskProps.onClick(i)}
      /> 
      ))}
    </>
  );
}