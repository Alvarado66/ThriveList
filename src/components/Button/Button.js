import React from "react";
import "./Button.css";

// Allows updates to styles or color anywhere on the page.
const STYLES = ["btn--primary", "btm--outline"];

const SIZES = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"];

const COLOR = ["primary", "blue", "red", "green"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {
  // Checks to see if the button created has a style and if does uses a ternary
  // Button with no style will be primary style by default
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonColor = STYLES.includes(buttonColor)
    ? buttonColor
    : null;

  return (
    // Able to update the button style, color, and size from here.
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
