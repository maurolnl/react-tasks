import { CSSProperties } from 'react';
import './index.css'
interface prop {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  className: string;
  isStyled: number;
}

export default function Button(buttonProps: prop) {
  return (
    <button
      className={buttonProps.isStyled === 1 ? `${buttonProps.className} button-style`: `${buttonProps.className} list-button`}
      onClick={buttonProps.onClick}
      style={buttonProps.isStyled === 1 ? buttonStyle : buttonProps.isStyled === 2 ? buttonStyleForm : {}}
    >{buttonProps.text}</button>
  );
}

const buttonStyle: CSSProperties = {
  float: "right",
  marginTop: 10,
  borderColor: "var(--app-color-secondary)",
  color: "var(--app-color-secondary)"
}

const buttonStyleForm: CSSProperties = {

}; 