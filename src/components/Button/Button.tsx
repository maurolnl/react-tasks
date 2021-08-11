import './index.css'
interface prop {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  className: string;
  isStyled: number;
}

export default function Button(buttonProps: prop) {
  const formButton = 1
  const undoTask = 2
  const removeTask = 3

  return (
    <button
      className={buttonProps.isStyled === formButton ? `button-style form-button`: buttonProps.isStyled === removeTask ? `button-style remove-button` : buttonProps.isStyled === undoTask ? `undo-button button-style` : `list-button button-style`}
      onClick={buttonProps.onClick}
    >{buttonProps.text}</button>
  );
}
