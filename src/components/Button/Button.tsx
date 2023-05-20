import { forwardRef } from "react";
import type { ReactNode, ButtonHTMLAttributes } from "react";

export const Button = forwardRef<
  HTMLButtonElement,
  {
    children: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  return (
    <button {...props} ref={ref}>
      {props.children}
    </button>
  );
});
