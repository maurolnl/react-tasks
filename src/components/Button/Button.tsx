import { CSSProperties } from "react";

interface prop {
  onClick: any;
  text: string;
  className: string;
  isStyled: boolean;
}

export default function Button(buttonProps: prop) {
  return (
    <button
      className={buttonProps.className}
      onClick={buttonProps.onClick}
      style={buttonProps.isStyled ? buttonStyle : {}}
    >{buttonProps.text}</button>
  );
}

const buttonStyle: CSSProperties = {
  float: "right",
  marginTop: 10,
};